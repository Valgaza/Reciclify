# ♻️ Reciclify

**Empowering Sustainable Waste Management Through Technology**

---

## 🌟 Overview

Reciclify is a full-stack platform designed to revolutionize plastic and e-waste recycling. By connecting households, businesses, and collectors, Reciclify streamlines the process of waste collection, order management, and recycling, making sustainability accessible and rewarding for everyone.

---

## 🚀 Key Features

- **User-Friendly Order Placement:** Place recycling orders in just a few steps.
- **Doorstep Collection:** Collectors pick up waste directly from your location.
- **Order Management:** Track current, past, and pending orders with ease.
- **Authentication:** Secure login/signup for users and collectors.
- **Online Payment:** Integrated payment gateway for seamless transactions.
- **Profile Management:** Edit and view user/collector profiles.
- **Targeted Collection:** Collectors see orders in their city for efficient pickups.
- **FAQs & Educational Content:** Learn why recycling matters and how Reciclify helps.

---

## 🏗️ Architecture

- **Frontend:** React.js (with React Router, Axios, Toastify, AOS, and more)
- **Backend:** Node.js, Express.js, MongoDB (via Mongoose)
- **Authentication:** JWT-based, with bcrypt for password hashing
- **File Uploads:** Multer for image uploads, converted to Base64
- **Deployment:** Netlify (frontend), Render (backend)

---

## 📦 Folder Structure

```
Reciclify/
├── recyclify-backend/
│   ├── src/
│   │   ├── controller/      # Auth & Order logic
│   │   ├── database/        # MongoDB connection
│   │   ├── middlewares/     # JWT, Multer
│   │   ├── models/          # User, Collector, Order schemas
│   │   ├── routers/         # API endpoints
│   │   ├── utils/           # File utilities
│   │   └── server.js        # Express server
│   └── package.json
├── recyclify-frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── Components/      # Modular React components
│   │   ├── Data.js          # Features, FAQs, WhyRecycle
│   │   └── App.js           # Main app logic
│   └── package.json
└── README.md
```

---

## 🔗 API Endpoints

### Authentication

- `POST /api/auth/signup` — Register as user or collector
- `POST /api/auth/login` — Login for user/collector
- `POST /api/auth/profile` — Get profile info
- `PATCH /api/auth/edit` — Edit profile

### Orders

- `GET /api/order/userOrders` — Get all user orders
- `POST /api/order/placeOrder` — Place a new order (with image upload)
- `POST /api/order/orderBycity` — Collectors fetch city-specific orders
- `POST /api/order/completedorders` — Get completed orders
- `POST /api/order/incompleteorders` — Get incomplete orders
- `PATCH /api/order/ordercomplete` — Mark order as completed

---

## 🖥️ Frontend Highlights

- **Homepage:** Features, WhyRecycle, FAQs, and a beautiful UI
- **Cart & Orders:** View, buy, and manage orders
- **Profile:** Edit and view user/collector details
- **Authentication Forms:** Secure signup/login flows
- **Responsive Design:** Works seamlessly on desktop and mobile

---

## 🛠️ Technologies Used

- **Frontend:** React, Axios, React Router, Toastify, AOS, React Icons
- **Backend:** Express, Mongoose, JWT, Multer, Nodemailer, Bcrypt
- **Database:** MongoDB
- **Deployment:** Netlify, Render

---

## 📝 How It Works

1. **Sign Up / Login:** Users and collectors register and authenticate.
2. **Place Order:** Users post recycling orders with details and images.
3. **Order Assignment:** Collectors view available orders in their city and accept them.
4. **Collection & Completion:** Collectors pick up waste, mark orders as complete.
5. **Track Orders:** Users and collectors track order status and history.
6. **Profile Management:** Edit personal details and view order history.

---

## 💡 Why Reciclify?

- **Saves Resources:** Promotes recycling and resource conservation.
- **Focused Processing:** Streamlines collection for better waste management.
- **Employment:** Creates opportunities for collectors and rag-pickers.
- **Convenience:** Doorstep service motivates more people to recycle.

---

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation
  ](https://www.mongodb.com/docs/)

---

## 🌱 Ready to Recycle?

**Not sure where to sell your household recyclables? Head to Reciclify. Let's Recycle!**

---
