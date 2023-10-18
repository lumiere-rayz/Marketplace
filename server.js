const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const productRoutes = require('./routes/productRoutes');
app.use(productRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/MarketPlace', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to Marketplace!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
