const express = require("express");
const app = express();

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");

const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(logger);

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
