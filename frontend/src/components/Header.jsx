import { 
  ShoppingCart, 
  Search, 
} from 'lucide-react';
const Header = ({ cartCount, searchQuery, setSearchQuery }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300">
              <ShoppingCart size={20} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-gray-900">
            TECH<span className="text-indigo-600">MODERN</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
          <Search className="absolute left-4 text-gray-400" size={18} />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="relative p-3 rounded-full hover:bg-gray-100 transition-colors">
            <ShoppingCart size={22} className="text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm cursor-pointer hover:border-indigo-500 transition-colors">
            <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;