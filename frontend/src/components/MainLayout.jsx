import Header from "./Header";

const MainLayout = ({ children, cartCount, searchQuery, setSearchQuery }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      <Header cartCount={cartCount} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p className="mb-4 font-medium">© 2024 TechModern Store. Design for Experience.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-indigo-600">Chính sách bảo hành</a>
            <a href="#" className="hover:text-indigo-600">Vận chuyển</a>
            <a href="#" className="hover:text-indigo-600">Hỗ trợ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;