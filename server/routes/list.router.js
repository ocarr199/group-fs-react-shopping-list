const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET
router.get('/', (req, res) => {
  // Get all of the items from the DB:
  const sqlText = `SELECT * FROM "list" ORDER BY "name" ASC;`;
  pool.query(sqlText)
    .then(result => {
      res.send(result.rows);
    }) // End .then
    .catch(error => {
      console.log('Error making database GET:', error);
      res.sendStatus(500); // Server error. 
    }); // End .catch
}) // End router.get

// POST
router.post('/', (req, res) => {
  // Declaring variable to hold new item & query: 
  const newItem = req.body;
  const queryText = `
      INSERT INTO "list" ("name", "quantity", "unit")
      VALUES ($1, $2, $3);
    `;
  // Sending query to DB: 
  pool.query(queryText, [newItem.name, newItem.quantity, newItem.unit])
    .then(result => {
      res.sendStatus(201)
    }) // End .then
    .catch(err => {
      console.log(`Error making post query`, err)
      res.sendStatus(500)
    }) // End .catch
}); // End router.post
// PUT

// DELETE





module.exports = router;