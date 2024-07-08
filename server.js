const express = require('express');
const app = express();
const dotenv = require("dotenv")
const connectDB = require('./database/connect');
connectDB();
dotenv.config()


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

