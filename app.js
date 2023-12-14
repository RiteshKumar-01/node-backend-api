const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const product_routes = require("./routes/product");

//this is the direct route define in from the basic starting page
app.get("/", function (req, res) {
  res.send("Hi, I am live");
});

//method to define API using custom routes and controllers
//middleware
app.use("/api/products", product_routes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} Yes, I am live!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
