let cart = [];

exports.getCart = (req, res) => {
    res.json(cart);
};

exports.addToCart = (req, res) => {
    const { productName } = req.body;

    if (!productName) {
        return res.status(400).json({ error: "Product name required" });
    }

    cart.push(req.body);
    res.status(201).json({ message: "Item added to cart" });
};
