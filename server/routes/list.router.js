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

// PUT

// DELETE

module.exports = router;