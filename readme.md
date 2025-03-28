# Chatrix - Real-Time Chat Application

## Live Demo

[Chatrix](https://chatrix-dzjy.onrender.com/)

## Overview

Chatrix is a real-time chat application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It offers user authentication, profile customization, and live chat features with an intuitive UI. The app also displays online users in real time.

## Features

- **Authentication**: Sign up and sign in functionality.
- **Profile Customization**: Change profile name, image, and theme.
- **Real-Time Chat**: Send and receive messages instantly.
- **Online Users Display**: See which users are currently online.
- **User-Friendly Interface**: Styled with Tailwind CSS and Daisy UI.
- **State Management**: Uses Zustand for global state management.
- **WebSocket Integration**: Ensures smooth real-time messaging.

## Tech Stack

- **Frontend**: React, Tailwind CSS, Daisy UI, Zustand
- **Backend**: Node.js, Express.js, MongoDB
- **Real-Time Communication**: WebSocket (Socket.io)
- **Deployment**: Render

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/ayushd701/chatrix.git
   cd chatrix
   ```

2. Install dependencies for both frontend and backend:

   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables in a .env file:

   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_string
   CLOUDINARY_API_KEY=your_cloudinary_api_string
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret_string
   ```

4. Start the backend server:
   ```sh
   cd backend
   npm start
   ```

4. Start the frontend server:
   ```sh
   cd frontend
   npm start
   ```
## Contributing

Feel free to fork this repository and submit pull requests.

## License

This project is open-source and available under the MIT License.

