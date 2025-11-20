const ReviewRepository = require("@repositories/review.repository.js");
const ProductRepository = require("@repositories/product.repository.js");
const axios = require("axios");
const config = require("@configs");

const ReviewService = {
  getAll: async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    const { count, rows } = await ReviewRepository.findAllPaginated(
      limit,
      offset
    );
    return {
      data: rows,
      meta: {
        total: count,
        page,
        totalPages: Math.ceil(count / limit),
      },
    };
  },

  getByProductId: async (product_id, page = 1, limit = 10) => {
    const product = await ProductRepository.findByProductId(product_id);
    if (!product) throw new Error("Product not found");

    const offset = (page - 1) * limit;
    const { count, rows } = await ReviewRepository.findByProductPaginated(
      product_id,
      limit,
      offset
    );

    if (count > 0) {
      return {
        reviews: rows,
        meta: {
          total: count,
          page,
          totalPages: Math.ceil(count / limit),
        },
      };
    }
    const url = `${config.scraper.baseUrl}/api/scrape/reviews/${product_id}`;    
    let scrapedReviews = [];

    try {
      const response = await axios.get(url);
      scrapedReviews = response.data.data || [];      
    } catch (err) {
      throw new Error("Server Error");
    }

    if (scrapedReviews.length === 0) {
      throw new Error("No reviews found");
    }

    try {
      await ReviewRepository.bulkInsert(scrapedReviews);      
    } catch (err) {
      throw new Error("Server Error");
    }

    const final = await ReviewRepository.findByProductPaginated(
      product_id,
      limit,
      offset
    );

    return {
      data: final.rows,
      meta: {
        total: final.count,
        page,
        lastPage: Math.ceil(final.count / limit),
      },
    };
  },

  getById: async (id) => {
    const review = await ReviewRepository.findById(id);
    if (!review) throw new Error("Review not found");
    return review;
  },

  create: async (data) => await ReviewRepository.create(data),

  update: async (id, data) => {
    const exist = await ReviewRepository.findById(id);
    if (!exist) throw new Error("Review not found");
    await ReviewRepository.update(id, data);
    return await ReviewRepository.findById(id);
  },

  delete: async (id) => {
    const exist = await ReviewRepository.findById(id);
    if (!exist) throw new Error("Review not found");
    await ReviewRepository.delete(id);
    return true;
  },
};
module.exports = ReviewService;
