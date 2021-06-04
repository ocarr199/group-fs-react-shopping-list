
default to camel case unless otherwise needed 



*COMPONENTS*

Header [x]

AddItemForm[]
    Item, quantity, unit inputs with labels[]
    save button[]

ShoppingListDisplay[]
    List[]
        -looping through(.map)
    Reset Button(clears purchase status)
    clear button (clears Table)

    Item[]
        --each entry
    Item Name[]
    Item quantity[]
    Item unit[]
    Buy button (mark as purchased)[]
        -once purchased hide button and move item to end of list
    remove button[]
       - deletes item


*DATABASE*

DB Name shopping-list;
Create Table "list" (
    "id" SERIAL PRIMARY  KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" FLOAT NOT NULL,
    "unit" VARCHAR(20),
    "isPurchased" BOOLEAN DEFAULT false
);

INSERT INTO "list" ("name", "quantity", "unit", "isPurchased")
VALUES('milk','1','gallon');

*SERVER*

GET
    -render objects from db on page load
    -In ShoppingListDisplay Component

POST 
    - Send Created Object to the DB
    -In the AddItemForm Component
    -SANITIZE!!!!!!!

PUT
    -Buy button, makes isPurchased = !isPurchased
    -Reset Button sets isPurchased  = false for all


DELETE
    -Remove Button, deletes single entry from table
    - Clear button deletes all entries from table

