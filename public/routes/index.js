let express = require('express')
let router = express.Router()

router.get('/', (req,res) => {
    res.render('home')
})

router.get('/products', (req,res) => {
    res.render('products')
})

router.get('/cart', (req,res) => {
    res.render('cart')
})

router.get('/contact', (req,res) => {
    res.render('contact')
})

router.get('/products/details', (req,res) => {
    res.render('details')
})

router.get('/admin', (req,res) => {
    res.render('admin')
})

router.get('/admin/bulk', (req,res) => {
    res.render('bulk')
})

router.get('/admin/productEdit', (req,res) => {
    res.render('productEdit')
})

router.get('/admin/signout', (req,res) => {
    res.render('signout')
})