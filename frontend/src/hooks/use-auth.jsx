import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import staffData from '../data/accounts.json'; 

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('authUser');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (err) {
            console.error("Lỗi khi đọc user từ localStorage", err);
            localStorage.removeItem('authUser');
        } finally {
            setIsLoading(false); 
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('authUser', JSON.stringify(user));
        } else {
            localStorage.removeItem('authUser');
        }
    }, [user]);

    const login = (username, password) => {
        setError(null);
        const foundUser = staffData.find(
            (s) => s.username === username && s.password === password
        );
        if (foundUser) {
            const { password, ...userData } = foundUser;
            setUser(userData);
            toast.success(`Đăng nhập thành công.`);
            navigate('/dashboard'); 
        } else {
            const loginError = 'Tên đăng nhập hoặc mật khẩu không đúng.';
            setError(loginError);
            toast.error(loginError);
            setUser(null);
        }
    };
    
    const logout = () => {
        setUser(null);
        toast.info('Đã đăng xuất thành công.');
        navigate('/login'); 
    };

    const value = {
        user,
        isAuthenticated: !!user,
        error,
        login,
        logout,
        isLoading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};