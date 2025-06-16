# Comforty E-commerce Website

A modern e-commerce platform built with React, Node.js, and MongoDB, focusing on furniture and home decor products.

## 🚀 Features

- **User Authentication**
  - Secure login and registration
  - JWT-based authentication
  - Protected routes
  - Password hashing with bcrypt

- **Product Management**
  - Browse products by categories
  - Filter products (Newest, Trending, Best Sellers)
  - Product details view
  - Responsive product grid

- **User Interface**
  - Modern and clean design
  - Responsive layout
  - Interactive components
  - Smooth animations
  - Search functionality

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit (State Management)
- React Router (Routing)
- Tailwind CSS (Styling)
- Axios (API Calls)
- Lucide Icons
- React Slick (Carousel)

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- JWT (Authentication)
- Bcrypt (Password Hashing)
- Cookie Parser

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/comforty-ecommerce.git
cd comforty-ecommerce
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Create a `.env` file in the backend directory:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/db
JWT_SECRET=your_jwt_secret
```

5. Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000/api
```

## 🚀 Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 📡 API Routes

### Authentication Routes
```
POST /api/auth/register
- Register a new user
- Body: { name, email, password }

POST /api/auth/login
- Login user
- Body: { email, password }

POST /api/auth/logout
- Logout user
- Requires authentication

GET /api/auth/me
- Get current user profile
- Requires authentication
```

### Product Routes
```
GET /api/products
- Get all products
- Query params: category, sort, limit, page

GET /api/products/:id
- Get single product details

GET /api/products/categories
- Get all product categories

GET /api/products/trending
- Get trending products

GET /api/products/newest
- Get newest products

GET /api/products/best-sellers
- Get best-selling products
```

## 🔒 Authentication Flow

1. **Registration**
   - User submits registration form
   - Backend validates data
   - Password is hashed
   - User is created in database
   - Redirect to login

2. **Login**
   - User submits login form
   - Backend validates credentials
   - JWT token is generated
   - Token is stored in cookies
   - User is redirected to home

3. **Protected Routes**
   - AuthCheck component verifies token
   - Unauthorized users are redirected to login
   - Authorized users can access protected content

## 🎨 UI Components

- **Navbar**
  - Top bar with announcements
  - Search functionality
  - User menu
  - Category navigation

- **Banner**
  - Hero section with slider
  - Call-to-action buttons
  - Featured products

- **Product Grid**
  - Filterable product list
  - Product cards with hover effects
  - Quick action buttons

- **Footer**
  - Company information
  - Category links
  - Newsletter subscription
  - Social media links





