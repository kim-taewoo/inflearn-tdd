const express = require('express');
const connectDB = require('./config/db');

// Constants
const PORT = process.env.PORT || 5000;

// App
const app = express();

// DB 연결
connectDB();

app.use(express.json({ extended: false }));
app.use('/api/products', require('./routes'));

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
