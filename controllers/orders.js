let orders = [];
let cart = [];

exports.getOrders = (req, res) => {
    res.json(orders);
};

exports.placeOrder = (req, res) => {
    if (cart.length === 0) {
        return res.status(400).json({ error: "Cart is empty" });
    }

    const newOrder = {
        orderId: orders.length + 1,
        items: [...cart]
    };

    orders.push(newOrder);
    cart = [];

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
};
