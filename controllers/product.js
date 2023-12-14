const getAllProduct = async (req, res) => {
  res.status(200).json({ msg: "I am from get all Products routes" });
};

const getAllProductTest = async (req, res) => {
  res
    .status(200)
    .json({ msg: "I am from get all Products routes of TESTING!!" });
};

module.exports = { getAllProduct, getAllProductTest };
