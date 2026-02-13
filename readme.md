## 📡 API Endpoints

### 🛍 Products API
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /products | Get all products |
| POST   | /products | Add a new product |

---

### 👤 Users API
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /users | Get all users |
| POST   | /users | Register new user |

---

### 🛒 Cart API
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /cart | View cart items |
| POST   | /cart | Add item to cart |

---

### 📦 Orders API
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /orders | View all orders |
| POST   | /orders | Place an order |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone "https://github.com/DhruvSoni-11/E-Commerce-backend-REST-API.git"
```

### 2️⃣ Navigate to Project Folder


### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run the Server

```bash
node app.js
```

Server will run at:

```
http://localhost:3000
```

---

## 🧪 Testing the APIs
```
GET http://localhost:3000/products
```

Send JSON data like:

```json
{
  "name": "Laptop",
  "price": 45000
}
```

---

## 🧱 Middleware Used

- **express.json()** → Parses incoming JSON
- **Logger Middleware** → Logs request details
- **Validation Middleware** → Validates product & user input
- **Error Handling Middleware** → Handles server errors globally



---



## 📄 License

This project is developed for academic and educational purposes only.
