const express = require('express');
const Connection = require('./models/db.js');
const indexRouter = require('./routes/index.js');
const productRouter = require('./routes/productRoute.js');
const cartRouter = require('./routes/cartRoute.js');
const userRouter = require('./routes/userRoute.js');
const orderRouter = require('./routes/orderRoute.js');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

dotenv.config();

// Middlewares
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', indexRouter);
app.use('/cart', cartRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);
app.use('/order', orderRouter);

app.listen(process.env.SERVER_PORT, () => {
	console.log('Server is listening on PORT: ' + process.env.SERVER_PORT);
});

Connection();
