# E-Shop Full-Stack
This is a full-stack e-commerce application built using JavaScript technologies, including Vite for the frontend, Express.js for the backend, and PostgreSQL for the database. It allows users to browse products, add them to the cart, and place orders.

## Features
View a list of products with details like name and price.
Add products to the shopping cart.
View and edit the shopping cart.
Place orders with the selected products.
Admin functionality to add, update, and delete products.
Technologies Used
## Frontend:
- Vite
- React
- Axios (for API requests)
## Backend:
- Express.js
- PostgreSQL
- CORS (Cross-Origin Resource Sharing)
## Getting Started
### Prerequisites
- Node.js and npm installed on your machine.
- PostgreSQL database set up.
### Installation
- Clone this repository:

git clone https://github.com/olusesa/e-shop-full-stack.git
cd e-shop-full-stack

- Install dependencies for both frontend and backend:

npm install (frontend default)

cd backend
npm install
## Configuration
### Database Configuration:
- Set up your PostgreSQL database and update the connection details in backend/server.js.
### Environment Variables:
- Configure any environment variables needed for your application, such as database credentials or API keys.
## Running the Application
### Start the backend server:

- cd backend
- npm start
### Start the frontend development server:

- npm start (frontend default project directory)
- Open your browser and visit http://localhost:3000 to view the application.
## Usage
As a regular user, you can browse products, add them to the cart, and place orders.
As an admin user, you have additional privileges to add, update, and delete products.
## License
This project is licensed under the MIT License - see the LICENSE file for details.