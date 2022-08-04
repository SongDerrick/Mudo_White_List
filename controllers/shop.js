const Product = require('../models/product');

exports.getProducts = (req, res, next)=>{
    //console.log(adminData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products, 
            docTitle: 'All Products', 
            path:'/products', 
            pageTitle: 'Shop'
        });
    });
    
}

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products, 
            docTitle: 'Shop', 
            path:'/', 
            pageTitle: 'Shop'
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
}