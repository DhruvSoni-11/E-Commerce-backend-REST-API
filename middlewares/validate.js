exports.validateProduct = (req, res, next) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: "Name and Price required" });
    }

    if (price <= 0) {
        return res.status(400).json({ error: "Price must be positive" });
    }

    next();
};

exports.validateUser = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Name and Email required" });
    }

    next();
};
