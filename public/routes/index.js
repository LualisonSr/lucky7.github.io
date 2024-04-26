let express = require('express');
let router = express.Router();

// Render home page
router.get(['/', '/home'], (req, res) => {
    res.render('home');
});

// Render products page
router.get('/products', (req, res) => {
    res.render('products');
});

// Render cart page
router.get('/cart', (req, res) => {
    res.render('cart');
});

// Render contact page
router.get('/contact', (req, res) => {
    res.render('contact');
});

// Render product details page with parameterized route
router.get('/products/:details', (req, res) => {
    res.render('details', { detailId: req.params.details });
});

// Admin routes
router.get('/admin', (req, res) => {
    res.render('admin');
});

router.get('/admin/bulk', (req, res) => {
    res.render('bulk');
});

router.get('/admin/productEdit', (req, res) => {
    res.render('productEdit');
});

router.get('/admin/signout', (req, res) => {
    res.render('signout');
});

module.exports = router;
