const express = require("express");
const router = express.Router();
const bookRoutes = require('./books');

//uses all the book routes in books.js
router.use('/books', bookRoutes);

module.exports = router;