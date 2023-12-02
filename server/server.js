const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost/signupApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  language: String,
  country: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/api/signup', async (req, res) => {
    const userData = req.body;
  
    try {
      const user = new User(userData);
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to register user' });
    }
  });
  
