const express = require("express");

const router = express.Router();

const { getAllProduct, getAllProductTest } = require("../controllers/product");

router.route("/").get(getAllProduct);
router.route("/test").get(getAllProductTest);

module.exports = router;

//Here all the routes for the API comes here and the body of that route written in the controllers file....
