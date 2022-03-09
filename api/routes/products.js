const router = require("express").Router();
const Product = require("../models/Products");

//CREATE A PRODUCT
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET PRODUCT
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const products = await Product.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET PRODUCT by title

router.get("/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const products = await Product.find({
      title: { $regex: ".*" + title + ".*", $options: "i" },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
