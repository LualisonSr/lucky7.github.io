-- Drop Triggers first to avoid unforseen errors
DROP TRIGGER IF EXISTS update_cart_quantity_insert;
DROP TRIGGER IF EXISTS update_cart_quantity_delete;

DROP TABLE IF EXISTS CartsProductsSubquantities;
DROP TABLE IF EXISTS CartsProducts;
DROP TABLE IF EXISTS Carts;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS Users;
