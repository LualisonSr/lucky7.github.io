CREATE TABLE "Users" (
	"id" INTEGER,
	"date_of_creation" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"user_type" integer NOT NULL,
	/*Making this a number to make it simple, 1 for admin, 2 for customer*/
	PRIMARY KEY("id" AUTOINCREMENT),
	check("user_type" in (1, 2)),
	CHECK(datetime("date_of_creation") IS NOT NULL)
	/*will check to see if the date follows ISO 8601 format*/
);
CREATE TABLE "Categories" (
	"id" INTEGER,
	"category_name" TEXT NOT NULL,
	"category_order" INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE "Products" (
	"id" INTEGER,
	"product_name" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"image_url" TEXT NOT NULL,
	"price" NUMERIC(12, 2) NOT NULL,
	/*this and the check for it ensure it is in proper monetary format*/
	"details" TEXT NOT NULL,
	"category_id" INTEGER NOT NULL,
	"featured" INTEGER NOT NULL,
	FOREIGN KEY("category_id") REFERENCES "Categories"("id"),
	PRIMARY KEY("id" AUTOINCREMENT),
	check ("price" > 0)
);
CREATE TABLE "Carts" (
	"id" INTEGER,
	"cart_status" INTEGER NOT NULL,
	/*Making this a number to make it simple, 1 for new, 2 for abandoned, and 3 for purchased*/
	"date_of_creation" TEXT NOT NULL,
	"user_id" INTEGER NOT NULL UNIQUE,
	/*ensures a one-to-one relationship*/
	FOREIGN KEY("user_id") REFERENCES "Users"("id"),
	PRIMARY KEY("id" AUTOINCREMENT),
	check("cart_status" in (1, 2, 3)),
	CHECK(datetime("date_of_creation") IS NOT NULL)
	/*will check to see if the date follows ISO 8601 format*/
);
CREATE TABLE "CartsProductsSubquantities" (
	"cart_product_id" INTEGER NOT NULL,
	"subquantity" INTEGER NOT NULL,
	PRIMARY KEY ("cart_product_id"),
	FOREIGN KEY("cart_product_id") REFERENCES "CartsProducts"("id")
);
CREATE TABLE "CartsProducts" (
	"id" INTEGER,
	"cart_id" INTEGER NOT NULL,
	"product_id" INTEGER NOT NULL,
	"quantity" INTEGER NOT NULL,
	/*Will be the sum of all "subquantity" rows*/
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("cart_id") REFERENCES "Carts"("id"),
	FOREIGN KEY("product_id") REFERENCES "Products"("id"),
	UNIQUE("cart_id", "product_id")
);
/*will trigger when a delete or insert action occurs on the table "CartsProductsSubquantities" and brings the total amount of cars in the cart to the "quantity" column*/
CREATE TRIGGER "update_cart_quantity_insert"
AFTER
INSERT ON "CartsProductsSubquantities" BEGIN
UPDATE "CartsProducts"
SET "quantity" = (
		SELECT SUM("subquantity")
		FROM CartsProductsSubquantities
		WHERE cart_product_id = NEW.cart_product_id
	)
WHERE id = NEW.cart_product_id;
END;
CREATE TRIGGER "update_cart_quantity_delete"
AFTER delete ON "CartsProductsSubquantities" BEGIN
UPDATE "CartsProducts"
SET "quantity" = (
		SELECT SUM("subquantity")
		FROM CartsProductsSubquantities
		WHERE cart_product_id = OLD.cart_product_id
	)
WHERE id = OLD.cart_product_id;
END;