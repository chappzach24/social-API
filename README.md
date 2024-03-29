# social-API

## Description
This is a RESTful API designed for building social media applications. It provides endpoints for managing users, thoughts, reactions, and friendships between users. With this API, you can create, read, update, and delete user accounts, post and interact with thoughts, and connect with other users through friendships.
## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose


## Installation

Clone the repository: git clone git@github.com:chappzach24/social-API.git

Install dependencies: npm install

Set up your MongoDB database.

## Usage

Start the server: npm start

start mongo: mongod

Access the API endpoints using tools like Postman or through your frontend application.

## API Endpoints

### Users
- GET /api/users: Get all users.
- GET /api/users/:userId: Get one user by ID.
- POST /api/users: Create a new user.
- PUT /api/users/:userId: Update user information.
- DELETE /api/users/:userId: Delete a user.
- POST /api/users/:userId/friends: Add a friend to a user.
- DELETE /api/users/:userId/friends/:friendId: Delete a friend from a user.

### Thoughts
- GET /api/thoughts: Get all thoughts.
- GET /api/thoughts/:thoughtId: Get one thought by ID.
- POST /api/thoughts: Create a new thought.
- PUT /api/thoughts/:thoughtId: Update a thought.
- DELETE /api/thoughts/:thoughtId: Delete a thought.
- POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Delete a reaction from a thought.

License
This project is licensed under the MIT License.