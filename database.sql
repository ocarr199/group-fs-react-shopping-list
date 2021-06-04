-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

DB Name shopping-list;

Create Table "list" (
    "id" SERIAL PRIMARY  KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" FLOAT NOT NULL,
    "unit" VARCHAR(20),
    "isPurchased" BOOLEAN DEFAULT false
);

INSERT INTO "list" ("name", "quantity", "unit")
VALUES('milk','1','gallon');