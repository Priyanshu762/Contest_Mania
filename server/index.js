const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);

app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));