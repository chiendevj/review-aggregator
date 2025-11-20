import { useState } from "react";

const HomePage = ({ products, onProductClick, searchQuery, setSearchQuery }) => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const categories = ['Tất cả', 'Âm thanh', 'Laptop', 'Đồng hồ', 'Máy ảnh', 'Phụ kiện'];

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes((searchQuery || "").toLowerCase()) ||
                          p.category.toLowerCase().includes((searchQuery || "").toLowerCase());
    const matchesCategory = activeCategory === "Tất cả" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Hero Banner */}
      <div className="rounded-3xl bg-indigo-900 overflow-hidden relative min-h-[300px] flex items-center mb-12 shadow-2xl group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
        <div className="relative z-10 p-8 md:p-16 max-w-2xl">
          <span className="text-indigo-300 font-bold tracking-wider text-sm mb-2 block uppercase">New Collection 2024</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Công nghệ tương lai <br/> trong tầm tay bạn.
          </h2>
          <button className="px-8 py-3 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 hover:px-10 transition-all duration-300 shadow-lg">
            Khám phá ngay
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Sản phẩm nổi bật</h2>
        <div className="flex items-center space-x-3 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-black text-white shadow-lg shadow-gray-300' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              {cat === 'Tất cả' && <Filter size={14} className="inline mr-1" />}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={onProductClick} 
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <Search size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào phù hợp.</p>
          <button onClick={() => {setSearchQuery(''); setActiveCategory('Tất cả')}} className="text-indigo-600 font-semibold mt-2 hover:underline">Xóa bộ lọc</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;