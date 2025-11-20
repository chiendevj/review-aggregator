const express = require("express");
const ReviewService = require("@services/review.service.js");
const reviewSchema = require("@validators/review.validator.js");
const router = express.Router();

/**
 * @openapi
 * /api/reviews:
 *   get:
 *     summary: Get paginated list of reviews
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Items per page
 *     responses:
 *       200:
 *         description: paginated reviews
 */
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 10, 100);
    const data = await ReviewService.getAll(page, limit);
    res.json({ success: true, ...data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * @openapi
 * /api/reviews/byProductId/{product_id}:
 *   get:
 *     summary: Get reviews by product_id (paginated)
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: reviews for product
 */
router.get("/byProductId/:product_id", async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 10, 100);
    const data = await ReviewService.getByProductId(product_id, page, limit);
    res.json({ success: true, ...data });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
});

/**
 * @openapi
 * /api/reviews/{id}:
 *   get:
 *     summary: Get review by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: review detail
 */
router.get("/:id", async (req, res) => {
  try {
    const data = await ReviewService.getById(req.params.id);
    res.json({ success: true, data });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
});

/**
 * @openapi
 * /api/reviews:
 *   post:
 *     summary: Create a review
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: created review
 */
router.post("/", async (req, res) => {
  try {
    const { error } = reviewSchema.validate(req.body);
    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const data = await ReviewService.create(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

/**
 * @openapi
 * /api/reviews/{id}:
 *   put:
 *     summary: Update a review
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: updated review
 */
router.put("/:id", async (req, res) => {
  try {
    const { error } = reviewSchema.validate(req.body);
    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const data = await ReviewService.update(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
});

/**
 * @openapi
 * /api/reviews/{id}:
 *   delete:
 *     summary: Delete a review
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: deleted review
 */
router.delete("/:id", async (req, res) => {
  try {
    await ReviewService.delete(req.params.id);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
});

module.exports = router;
