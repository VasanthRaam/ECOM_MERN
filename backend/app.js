// Main backend application file

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
dotenv.config({path:path.join(__dirname,'config','config.env')});
const connectDatabase = require('./config/connectDatabase');

connectDatabase();

const products = require('./routes/product');
const orders = require('./routes/order');

app.use(express.json());
app.use(cors());
app.use('/api/',products);
app.use('/api/',orders);


app.listen(process.env.PORT, () => {
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV} `);
});