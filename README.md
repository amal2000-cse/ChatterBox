# MERN Stack Chat Application

This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features real-time messaging using Socket.io for communication between clients and the server. The application allows users to sign up, log in, and chat with other users who have accounts on the platform. Users can also see which other users are online. Additionally, the application includes features such as separate avatars for different users and displaying the time of message send under each message.

## Technologies Used

- **Frontend**:
  - React.js
  - Vite
  - Daisy for CSS
  
- **Backend**:
  - Node.js
  - Express.js
  - Mongoose (MongoDB object modeling)
  - MongoDB (Database)

- **Other**:
  - Socket.io (Real-time communication)
  
## Functionality

- **Authentication**:
  - Users can sign up for an account.
  - Users can log in if they already have an account.
  - Users are redirected to the chat interface after logging in.

- **Real-Time Chat**:
  - Users can send and receive messages in real-time.
  - Notification sound plays when receiving a message.

- **User Interaction**:
  - Users can see which other users are online.
  - Separate avatars are provided for each user.
  - Message timestamps are displayed under each message.

## API Routes

- `/api/auth`: Handles user authentication (sign up, log in).
- `/api/messages`: Handles sending and receiving messages.
- `/api/users`: Handles user-related operations (e.g., fetching online users).

## Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/mern-stack-chat-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd MERN_chatapp
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Visit `https://mern-chatapp-y91t.onrender.com/` in your web browser to access the application.

## Additional Notes

- Make sure to have MongoDB installed and running on your local machine or provide the connection URI to a MongoDB instance in the project configuration.
- Customize the application as per your requirements.

Feel free to contribute, report issues, or suggest improvements! 🚀
