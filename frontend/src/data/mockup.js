const PRODUCTS = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Noise Canceling",
    category: "Âm thanh",
    price: 8490000,
    rating: 4.8,
    reviewsCount: 128,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000",
    description: "Tai nghe chống ồn hàng đầu thị trường với 2 bộ xử lý điều khiển 8 micrô, mang lại chất lượng cuộc gọi chưa từng có và khả năng khử tiếng ồn tuyệt vời.",
    reviews: [
      { user: "Minh Tuấn", avatar: "MT", rating: 5, content: "Chất âm tuyệt vời, đeo lâu không bị đau tai. Đáng tiền!", date: "2 ngày trước" },
      { user: "Hương Giang", avatar: "HG", rating: 4, content: "Giao hàng nhanh, đóng gói đẹp. Màu trắng hơi dễ bám bẩn.", date: "1 tuần trước" }
    ]
  },
  {
    id: 2,
    name: "MacBook Air M2 Midnight",
    category: "Laptop",
    price: 26990000,
    rating: 4.9,
    reviewsCount: 342,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000",
    description: "Thiết kế siêu mỏng nhẹ, chip M2 mạnh mẽ xử lý mọi tác vụ văn phòng và đồ họa nhẹ nhàng. Thời lượng pin lên đến 18 giờ.",
    reviews: [
      { user: "Đức Anh", avatar: "DA", rating: 5, content: "Máy đẹp không tì vết, màu Midnight sang trọng nhưng hơi bám vân tay.", date: "Hôm qua" }
    ]
  },
  {
    id: 3,
    name: "Apple Watch Series 9",
    category: "Đồng hồ",
    price: 10490000,
    rating: 4.7,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80&w=1000",
    description: "Chip S9 SiP mạnh mẽ nhất trên Apple Watch. Cách tương tác ma thuật mới mà không cần chạm vào màn hình.",
    reviews: []
  },
  {
    id: 4,
    name: "Fujifilm X-T5 Mirrorless",
    category: "Máy ảnh",
    price: 41500000,
    rating: 5.0,
    reviewsCount: 56,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000",
    description: "Cảm biến 40MP X-Trans 5 HR BSI CMOS. Quay phim 6.2K/30p 4:2:2 10-bit. Hoàn hảo cho nhiếp ảnh gia.",
    reviews: [
       { user: "Nam Nhiếp Ảnh", avatar: "NA", rating: 5, content: "Màu film giả lập của Fuji chưa bao giờ làm thất vọng.", date: "3 tuần trước" }
    ]
  },
  {
    id: 5,
    name: "Mechanical Keyboard Keychron Q1",
    category: "Phụ kiện",
    price: 3890000,
    rating: 4.6,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000",
    description: "Bàn phím cơ custom khung nhôm nguyên khối, gasket mount cho cảm giác gõ mềm mại và âm thanh trầm ấm.",
    reviews: []
  },
  {
    id: 6,
    name: "Loa Marshall Stanmore III",
    category: "Âm thanh",
    price: 9200000,
    rating: 4.8,
    reviewsCount: 150,
    image: "https://images.unsplash.com/photo-1622393532451-1ea462b94717?auto=format&fit=crop&q=80&w=1000",
    description: "Âm thanh trường rộng, kết nối Bluetooth 5.2. Thiết kế cổ điển mang tính biểu tượng của Marshall.",
    reviews: []
  }
];

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};