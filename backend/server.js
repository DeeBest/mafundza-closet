require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const errorHandler = require('./middleware/errorHandler');

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};
connect();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/images', express.static(path.join(__dirname, 'images')));

app.get('/api', (req, res) => {
  res.status(200).json({ message: "Welcome to Mafundza's Closet application" });
});

app.use('/api/products', require('./routes/productsRoutes'));

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use(errorHandler);
