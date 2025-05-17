require('dotenv').config();
const cors  = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorMiddleware');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const cartRouter = require('./routes/cartRoutes');
const port = process.env.PORT;
const mongo = process.env.MONGO_URI;
const API = process.env.CLIENT_URL;

//express app
const app = express();

const corsOptions = {
    origin: API,  
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,  
  };

//middlewares
app.use(cors(corsOptions));
app.use(express.json());

//routes
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/cart', cartRouter);

//error handler
app.use(errorHandler);

//connect to mongodb
mongoose.connect(mongo)
    .then(() => {
        console.log('connected to mongodb successfully!');
    })
    .catch((error) => {
        console.log(error);
    });

//listen for requests
app.listen(port, () => {
    console.log('Listening on port: ' + port);
});