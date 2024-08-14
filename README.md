# MERN Stack E-Commerce Website

Welcome to the MERN Stack E-Commerce Website! This project is a fully functional e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js) with a variety of features designed for a comprehensive shopping experience.

## 🔥 Features

- **Basic E-commerce Features**:
  - Product lists
  - Product details
  - Cart functionality
  - Checkout process

- **Secure Payments**:
  - Card payments through Stripe
  - Cash payments

- **Admin Panel**:
  - Add/Edit Orders
  - Add/Edit Products

- **Data Management**:
  - Sorting, Filtering, and Pagination using Mongoose

- **Authentication**:
  - Secure login and registration with Passport JS strategies
  - API authentication with Passport JWT

- **Email Notifications**:
  - Order confirmation emails
  - Password reset emails

- **User Profile**:
  - Manage user profile
  - View user orders

## 🔥 Technical Details

- **Frontend**:
  - React 18 with Tailwind CSS for styling
  - Redux Toolkit with Async Thunk for state management
  - React Router v6 for routing
  - JSON-server for front-end testing

- **Backend**:
  - MongoDB for database storage
  - Mongoose v7 as ODM
  - REST API using Express

- **Authentication**:
  - Authentication using Passport JS
  - API Authentication using Passport JWT

- **Deployment**:
  - MongoDB Atlas cloud database for remote storage
  - Vercel for server deployment

- **Email**:
  - Nodemailer with GMail SMTP system for email notifications

- **Payments**:
  - Stripe for payment processing with PaymentIntent-based custom flow

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB Atlas account

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repository-name.git


Navigate to the project directory:

bash
Copy code
cd your-repository-name
Install backend dependencies:

bash
Copy code
cd server
npm install
Install frontend dependencies:

bash
Copy code
cd ../client
npm install
Set up environment variables:

Create a .env file in the server directory and add your MongoDB URI and other environment variables.
Create a .env file in the client directory for your Stripe API key and other necessary configurations.
Run the development server:

Start the backend server:
bash
Copy code
cd server
npm start
Start the frontend development server:
bash
Copy code
cd ../client
npm start
📂 Folder Structure
client/ - Frontend application

src/ - Source files for the React application
public/ - Public assets
server/ - Backend application

models/ - Mongoose models
routes/ - Express routes
controllers/ - Route handlers
middleware/ - Authentication and other middleware
🎨 Customizing and Development
Frontend: You can customize the look and feel of the website by modifying the Tailwind CSS configuration and React components in the client/src/ directory.

Backend: Modify API routes, models, and controllers in the server/ directory as needed.

⚠️ Important Notes
Ensure that you do not commit sensitive information like API keys or database credentials to version control. Use environment variables for this purpose.
The project assumes a working knowledge of the MERN stack. If you're new to these technologies, consider exploring documentation or tutorials for each component.
📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

📞 Contact
For any questions or issues, please feel free to reach out via GitHub Issues or email at your-email@example.com.