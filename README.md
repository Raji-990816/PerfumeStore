# Perfume Store 🛍️

A full-stack e-commerce web application for browsing and purchasing perfumes. Built with **React**, **Node.js**, **Express**, and **MongoDB**, this app allows users to explore collections, manage their shopping cart, and (in future versions) securely complete purchases with integrated payments.

---

## 🚀 Live Demo

* [perfume-store-pink.vercel.app](https://perfume-store-pink.vercel.app)
---

## 💠 Tech Stack

* **Frontend**: React, Tailwind CSS, Axios, Context API
* **Backend**: Node.js, Express.js, MongoDB, Mongoose
* **Authentication**: JWT (User login completed)
* **Payment Integration**: Stripe or PayPal (planned)
* **Deployment**: Vercel (Frontend), Render (Backend)

---

## 📦 Features

* Browse perfume collections by brand, gender, and size
* Add/remove items to/from cart
* Context-based cart management
* Responsive design
* User login system with JWT (secured routes)
* Environment-based API routing (Vercel & Render compatible)

---

## 🧑‍💻 Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/Raji-990816/PerfumeStore.git
cd PerfumeStore
```

2. **Set up backend**

```bash
cd server
npm install
```

* Create a `.env` file with:

  ```
  MONGO_URI=your_mongo_connection_string
  PORT=5000
  CLIENT_URL=your_frontend_localhost
  JWT_SECRET=your_jwt_secret
  ```

* Run backend locally:

  ```bash
  npm start
  ```

3. **Set up frontend**

```bash
cd client
npm install
```

* Create a `.env` file:

  ```
  REACT_APP_API_URL=your_backend_localhost
  ```

* Run frontend locally:

  ```bash
  npm start
  ```

---

## 📌 Current Status

✅ Products API
✅ Cart functionality
✅ Pagination
✅ Responsive UI
✅ Live deployed frontend & backend
✅ Environment variable separation
✅ JWT-based User Authentication

---

## 🗸 Future Work 

* [ ] 🔐 **Admin Authentication & Login Panel**

  * Secure admin routes
  * Separate admin login screen

* [ ] 📅 **Admin Dashboard**

  * Manage products (Add/Edit/Delete)
  * View user orders
  * Analytics panel (basic)

* [ ] 💳 **Payment Integration**

  * Stripe or PayPal for secure checkout

* [ ] 🛒 **Order Management**

  * Save orders to DB
  * Order history UI for users

* [ ] 🔒 **Security Enhancements**

  * Input sanitization
  * Rate limiting
  * Helmet & CORS best practices

* [ ] 🥺 **Minor UI/UX Improvements**

  * Empty cart state
  * Better loading states
  * Enhanced mobile responsiveness

* [ ] 🧺 **Testing**

  * Unit & integration tests (Jest, Supertest)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT
