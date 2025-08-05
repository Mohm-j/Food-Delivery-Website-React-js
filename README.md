## 🍔 Food Ordering App

A modern and responsive food ordering web application built with React, supporting live search, cart functionality, and API integration using json-server. It follows a Flux-like architecture using Context API and useReducer.

---

## 🚀 Features

🏠 Browse food items and menus

🔎 Live search across home and cart pages

🛒 Add, remove, and search items in the cart

🔐 Popup-based Login and Sign Up forms

🔁 Routing via React Router

☁️ API connected via json-server

🔔 Toast notifications using React Toastify

⚙️ Efficient input handling using useRef

---

## 🧩 Tech Stack

React (with Vite)

React Router

Context API + useReducer + useState (Flux architecture)

Axios for HTTP requests

React Toastify for user notifications

CSS for styling

json-server for mock backend

concurrently for simultaneous frontend and backend startup

### 🔍 Live Search

Real-time search functionality on both:

Main food list

Shopping cart

Search results update instantly as the user types.

Built with useState, useRef, and efficient filtering logic.

📁 Project Structure

src/
├── api/ # Axios configuration for API calls
├── assets/ # Icons and image assets
├── components/ # Navbar, Footer, LoginPopup, etc.
├── contexts/ # StoreContext using useReducer + useState
├── pages/ # Home, Cart, PlaceOrder
├── App.jsx # Main application routes and layout
├── main.jsx # Entry point (wraps with Context and Router)
└── index.css # Global styling

# 1. Clone the repository

git clone https://github.com/Mohm-j/Food-Delivery-Website-React-JS.git

# 2. Navigate into the project folder

cd Food Delivery Website

# 3. Install dependencies

npm install

### ▶️ Start Frontend & Backend (json-server)

Make sure you have a db.json file set up for json-server.
To start both frontend and backend simultaneously:

npm start

This runs both the React app and json-server using concurrently.

Example Backend API
Your json-server should serve data like this:

{
"food_list": [ ... ],
"menu_list": [ ... ]
}

Backend runs on http://localhost:3001 by default.

### 🧪 Available Scripts

npm run dev # Start frontend only (for development)
npm run backend # Start json-server only
npm start # Start frontend + backend using concurrently
npm run build # Build frontend for production

### 🛠 Future Improvements

🔐 Fully implement login/signup authentication
✅ Add order history and user dashboard

👤 Author

[GitHub Profile](https://github.com/Mohm-j)
