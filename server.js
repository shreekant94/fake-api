const express = require('express');
const cors = require('cors');

//fake data
const mockdata = require('./data');
let users = mockdata.users;
let nextId = mockdata.nextId;

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get('/users', (req, res) => {
    setTimeout(() => {
        res.json(users);
    }, 500); // Simulate network delay
});

// Get user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Create new user
app.post('/users', (req, res) => {
   const {name, email} = req.body;
    if (name && email) {
        const newUser = { id: nextId++, name, email };
        users.push(newUser);
        res.status(201).json(newUser);
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }   
});

//put /users/:id - Update user by ID
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        const { name, email } = req.body;
        if (name) user.name = name;
        if (email) user.email = email;

        users[users.indexOf(user)] = user;
        res.json(users[users.indexOf(user)]);

    } else {
        res.status(404).json({ message: 'User not found' });
    }
});


// Delete user by ID
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.json(deletedUser[0]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }

});

// Optional: Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Fake API!',
    endpoints: [
      'GET /users',
      'GET /users/:id',
      'POST /users',
      'PUT /users/:id',
      'DELETE /users/:id'
    ]
  });
});

// test api
app.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Start server


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});     

