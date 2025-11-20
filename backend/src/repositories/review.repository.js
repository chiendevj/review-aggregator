const db = require("@models");
const Review = db.Review;

const ReviewRepository = {
  findAllPaginated: (limit, offset) =>
    Review.findAndCountAll({ limit, offset, order: [["created_at", "DESC"]] }),

  findByProductPaginated: (product_id, limit, offset) =>
    Review.findAndCountAll({
      where: { product_id },
      limit,
      offset,
      order: [["created_at", "DESC"]],
    }),
  bulkInsert: async (reviews) => {
    return Review.bulkCreate(reviews, {
      ignoreDuplicates: true,
    });
  },
  findAll: () => Review.findAll(),
  findById: (id) => Review.findOne({ where: { id } }),
  create: (data) => Review.create(data),
  update: (id, data) => Review.update(data, { where: { id } }),
  delete: (id) => Review.destroy({ where: { id } }),
};
module.exports = ReviewRepository;
