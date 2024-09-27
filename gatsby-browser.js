// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB (or PostgreSQL)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.get('/', (req, res) => res.send('API is running...'));

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${5000}`);
});
