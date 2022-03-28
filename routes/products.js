const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all posts
router.get('/', async (req, res) => {
  try {
    res.json(await Product.find());
  } catch (error) {
    res.json({ message: error });
  }
});

router.get('/:productId', async (req, res) => {
  try {
    res.json(await Product.findById(req.params.productId));
  } catch (error) {
    res.json({ message: error });
  }
});

router.post('/', async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    availableSizes: req.body.availableSizes,
    category: req.body.category,
  });
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete post
router.delete('/:productId', async (req, res) => {
  try {
    const deletedProduct = await Product.deleteOne({
      _id: req.params.productId,
    });
    res.json(deletedProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update post
router.patch('/:productId', async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
          price: req.body.price,
          availableSizes: req.body.availableSizes,
          category: req.body.category,
        },
      }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
