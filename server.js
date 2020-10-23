const express = require('express');
const connectDB = require('./config/db');

// Constants
const PORT = process.env.PORT || 5000;

// App
const app = express();

// DB 연결
connectDB();

app.use('/api/products', require('./routes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));