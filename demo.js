// project-root/
// │
// ├── controllers/
// │   └── userController.js
// │
// ├── models/
// │   └── userModel.js
// │
// ├── routes/
// │   └── userRoutes.js
// │
// ├── views/
// │   └── index.ejs
// │
// ├── app.js
// └── package.json

// userModel.js ------------------------------------------------------------------------------------

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model('User', userSchema);


// userController.js -------------------------------------------------------------------------------

const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (req.body.name != null) {
      user.name = req.body.name;
    }
    if (req.body.email != null) {
      user.email = req.body.email;
    }
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.remove();
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// userRoutes.js------------------------------------------------------------------------------------

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

// index.ejs ---------------------------------------------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>User Management System</title>
// </head>
// <body>
//   <h1>User Management System</h1>
//   <ul id="user-list"></ul>
//   <script>
//     fetch('/api/users')
//       .then(response => response.json())
//       .then(users => {
//         const userList = document.getElementById('user-list');
//         users.forEach(user => {
//           const li = document.createElement('li');
//           li.textContent = `Name: ${user.name}, Email: ${user.email}`;
//           userList.appendChild(li);
//         });
//       })
//       .catch(error => console.error('Error fetching users:', error));
//   </script>
// </body>
// </html>

// App.js ------------------------------------------------------------------------------------------

// app.js

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Routes
app.use('/api/users', userRoutes);

// Serve static files
app.use(express.static('views'));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Package.json ------------------------------------------------------------------------------------

{
    "name": "mern-mvc-demo",
    "version": "1.0.0",
    "description": "A basic demo of a Node.js and Express.js application with MVC structure",
    "main": "app.js",
    "scripts": {
      "start": "node app.js"
    },
    "dependencies": {
      "ejs": "^3.1.6",
      "express": "^4.17.1",
      "mongoose": "^6.0.10"
    }
  }
  