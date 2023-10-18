const Product = require('../models/product');

module.exports = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products' });
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching product' });
        }
    },

    addProduct: async (req, res) => {
        try {
            const newProduct = new Product(req.body);
            await newProduct.save();
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: 'Error adding product' });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json({ message: 'Error updating product' });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Product deleted' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting product' });
        }
    },

    deleteAllProducts: async (req, res) => {
        try {
            await Product.deleteMany();
            res.status(200).json({ message: 'All products deleted' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting products' });
        }
    },

    findByName: async (req, res) => {
        try {
            const products = await Product.find({ name: { $regex: req.query.name, $options: 'i' } });
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products' });
        }
    }
};
