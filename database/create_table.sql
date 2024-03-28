CREATE TABLE "Users" (
	"id"	INTEGER,
	"user record creation"	NUMERIC NOT NULL,
	"name"	TEXT NOT NULL,
	"email"	TEXT NOT NULL,
	"password"	TEXT NOT NULL,
	"user type"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "Categories" (
	"id"	INTEGER,
	"category_name"	TEXT NOT NULL,
	"category_order"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "Products" (
	"id"	INTEGER,
	"product_name"	TEXT NOT NULL,
	"description"	TEXT NOT NULL,
	"image_url"	TEXT NOT NULL,
	"price"	INTEGER NOT NULL,
	"details"	TEXT NOT NULL,
	"category_id"	INTEGER NOT NULL UNIQUE,
	"featured"	INTEGER NOT NULL,
	FOREIGN KEY("category_id") REFERENCES "Categories"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "Carts" (
	"id"	INTEGER,
	"cart_status"	TEXT NOT NULL,
	"cart_creation_date"	NUMERIC NOT NULL,
	"user_id"	INTEGER NOT NULL UNIQUE,
	FOREIGN KEY("user_id") REFERENCES "Users"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "CartsProducts" (
	"id"	INTEGER,
	"cart_id"	INTEGER NOT NULL UNIQUE,
	"product_id"	INTEGER NOT NULL UNIQUE,
	"quantity"	INTEGER NOT NULL,
	FOREIGN KEY("product_id") REFERENCES "Products"("id"),
	FOREIGN KEY("cart_id") REFERENCES "Carts"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
