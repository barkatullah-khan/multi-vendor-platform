const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { dbConnect } = require('./utils/db');

// Import Routes
const authRoutes = require('./routes/authRoutes');

// 1. Middlewares
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// 2. Register API Routes
app.use('/api', authRoutes);
app.use('/api', require('./routes/dashboard/categoryRoutes'));
app.use('/api', require('./routes/dashboard/productRoutes'));

app.get('/', (req, res) => {
    res.send('Hello from Backend');
});

// 3. Catch-All 404 Logger (Helps debug missing routes)
app.use((req, res) => {
    console.log(`❌ 404 Not Found: [${req.method}] ${req.originalUrl}`);
    res.status(404).json({ error: `Route ${req.originalUrl} not found on backend server` });
});

const PORT = process.env.PORT || 5000;

dbConnect();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});