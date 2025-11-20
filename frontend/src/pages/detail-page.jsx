import { useEffect, useState } from "react";

const DetailPage = ({ product, onBack, onAddToCart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  if (!product) return null;

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Detail Header Nav (Custom for Detail Page) */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => { setIsVisible(false); setTimeout(onBack, 300); }}
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors group"
        >
          <div className="p-2 rounded-full bg-gray-100 group-hover:bg-indigo-50 mr-2 transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="font-medium">Quay lại</span>
        </button>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"><Heart size={20} /></button>
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"><Share2 size={20} /></button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Image Gallery */}
          <div className="space-y-4 animate-slide-up">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-lg relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[...Array(4)].map((_, i) => (
                 <div key={i} className={`aspect-square rounded-xl overflow-hidden cursor-pointer border-2 ${i === 0 ? 'border-indigo-600' : 'border-transparent'}`}>
                   <img src={product.image} className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  {product.category}
                </span>
                <div className="flex items-center text-sm text-gray-500 border-l border-gray-300 pl-2">
                   <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
                   <span className="font-medium text-gray-900 mr-1">{product.rating}</span> 
                   ({product.reviewsCount} đánh giá)
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>
              <p className="text-3xl text-indigo-600 font-bold">{formatCurrency(product.price)}</p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Actions */}
            <div className="flex items-center space-x-4 py-6 border-y border-gray-100">
              <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all font-bold text-lg"
                >-</button>
                <span className="w-12 text-center font-medium text-gray-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all font-bold text-lg"
                >+</button>
              </div>
              <button 
                onClick={() => onAddToCart(product, quantity)}
                className="flex-1 bg-indigo-600 text-white h-12 rounded-full font-semibold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span>Thêm vào giỏ</span>
              </button>
            </div>

            {/* Extra Info Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-gray-50">
                <CheckCircle2 className="text-green-500 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Bảo hành chính hãng</h4>
                  <p className="text-xs text-gray-500 mt-0.5">12 tháng, lỗi 1 đổi 1</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-gray-50">
                <ThumbsUp className="text-blue-500 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Freeship toàn quốc</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Cho đơn hàng trên 1 triệu</p>
                </div>
              </div>
            </div>
            
            {/* Reviews */}
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                Đánh giá & Nhận xét
                <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{product.reviewsCount}</span>
              </h3>
              
              <div className="space-y-6">
                {product.reviews.length > 0 ? (
                  product.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-6 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white flex items-center justify-center font-bold text-sm">
                            {review.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm">{review.user}</h4>
                            <RatingStars rating={review.rating} size={3} />
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm pl-14 leading-relaxed bg-gray-50/50 p-3 rounded-xl rounded-tl-none">
                        {review.content}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400 italic">
                    Chưa có đánh giá nào. Hãy là người đầu tiên!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;