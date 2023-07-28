require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// import our routers
const productRouter = require('./routers/product-router');
const blogpostRouter = require('./routers/blogpost-router');

// use the routers
// POST /products
app.use('/products', productRouter);
// app.use('/blogposts', blogpostRouter);
app.use('/api/admin/blogposts', blogpostRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
