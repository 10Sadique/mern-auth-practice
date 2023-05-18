# MERN Auth Practice Project

This is a full-stack MERN (MongoDB, Express.js, React, Node.js) application with user authentication. The backend is built with Express.js, utilizing various packages such as Bcrypt, JSON Web Tokens (JWT), Mongoose, and Dotenv. The frontend is developed using React with Vite as the bundler. Redux Toolkit and RTK Query are used for state management.

The application in deployed with Render. The app link is: https://mern-auth-rmvi.onrender.com/

## Features

-   User authentication: Users can sign up and log in to the application using their email and password.
-   Secure password storage: Passwords are hashed using Bcrypt before being stored in the MongoDB database.
-   JSON Web Tokens (JWT): Upon successful login, a JWT is generated and sent to the client. This token is used for subsequent authenticated requests to the backend.
-   MongoDB and Mongoose: User data including email, name, and hashed passwords are stored in a MongoDB database using the Mongoose ODM (Object Data Modeling).
-   Environment Variables: The backend utilizes the Dotenv package to load environment variables, allowing easy configuration of sensitive data such as database connection details and JWT secret.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/10Sadique/mern-auth-practice.git
    ```

2. Navigate to the project's root directory:

    ```bash
    cd mern-auth-practice
    ```

3. Install the dependencies for the backend:

    ```bash
    npm i
    ```

4. Install the dependencies for the frontend:
    ```bash
    cd ../frontend
    npm install
    ```

## Configuration

1. Create a .env file in the root directory and define the following environment variables:

    ```makefile
    NODE_ENV=           # Node environment e.g. production or development
    PORT=5000           # Port on which the backend server will run
    MONGODB_URI=        # MongoDB connection URI
    JWT_SECRET=         # Secret key used for JWT token generation
    ```

2. Replace MONGODB_URI with your own MongoDB connection string.

## Usage

1. Start the backend server:

    ```bash
    npm run server
    ```

    The server should now be running on the specified port (default: 5000).

2. Start the frontend development server:

    ```bash
    npm run client
    ```

    The React development server will start, and the application will be accessible at http://localhost:3000.

3. Start both backend and frontend together:

    ```bash
    npm run dev
    ```

4. Open the application in your web browser, and you should see the login/signup page.

## Deployment

To deploy the application, you can follow the hosting provider's documentation for deploying a MERN application. Here are some general steps:

1. Build the production-ready frontend:

    ```bash
    cd frontend
    npm run build
    ```

    This will generate an optimized and minified version of the frontend in the frontend/dist directory.

2. Set the NODE_ENV environment variable to production in the .env file of the backend:

    ```makefile
    NODE_ENV=production
    ```

3. Start the backend server in production mode:
    ```bash
    cd ..
    npm start
    ```
    It is recommended to use a process manager like PM2 to ensure the server keeps running in the background.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.

2. Create a new branch with a descriptive name:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Make your modifications, additions, or bug fixes.

4. Commit your changes:

    ```bash
    git commit -m "Your detailed description of the changes."
    ```

5. Push the branch to your forked repository:

    ```bash
    git push origin feature/your-feature-name
    ```

6. Open a pull request on the original repository, providing a detailed description of your changes.
