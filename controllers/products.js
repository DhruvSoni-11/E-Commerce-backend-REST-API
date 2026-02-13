let products = [];

exports.getProducts = (req, res) => {
    res.json(products);
};

exports.addProduct = (req, res) => {
    products.push(req.body);
    res.status(201).json({ message: "Product added successfully" });
};
