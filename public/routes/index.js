let express = require('express');
let router = express.Router();
let Database = require('../lucky.db');

// Route for the home page
router.get('/', (req, res) => {
    res.render('home');
});

// Additional route for '/home' that renders the same view as '/'
router.get('/home', (req, res) => {
    res.render('home');
});

// Route for the products page
router.get('/products', (req, res) => {
    res.render('products', {description: description, price: price, productName: product_name, image: image_url, details: details});
});

// Route for the cart page
router.get('/cart', (req, res) => {
    res.render('cart', {cartStatus: cart_status, creationDate: date_of_creation, cartQuantity, subquantity});
});

// Route for the contact page
router.get('/contact', (req, res) => {
    res.render('contact');
});

// Route for the product details page
router.get('/products/details', (req, res) => {
    res.render('details', {description: description, price: price, productName: product_name, details: details});
});

// Route for the admin main page
router.get('/admin', (req, res) => {
    res.render('admin');
});

// Route for the bulk edit page under admin
router.get('/admin/bulk', (req, res) => {
    res.render('bulk', {description: description, price: price, productName: product_name, details: details, image: image_url});
});

// Route for the product edit page under admin
router.get('/admin/productEdit', (req, res) => {
    res.render('productEdit', {description: description, price: price, productName: product_name, details: details, image: image_url});
});

// Route for the admin signout page
router.get('/admin/signout', (req, res) => {
    res.render('signout');
});

// Export the router so it can be used in server.js
module.exports = router;
