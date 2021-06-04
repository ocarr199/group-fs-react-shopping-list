const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...





router.post('./', (req,res) => {
    const newItem = req.body;
    const queryText = `INSERT INTO "list" ("name", "quantity", "unit", "isPurchased" 
                         VALUES($1, $2, $3, $4) `
    pool.query(queryText, [newItem.name, newItem.quantity, newItem.unit, newItem.isPuchased])
    .then(result => {

        res.sendStatus(201)
    }).catch(err => {
        console.log(`Error making post query`, err)
        res.sendStatus(500)
    })
})
module.exports = router;