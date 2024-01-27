const express = require('express');
const { json } = require('express');
const env = require('dotenv')
const cors = require('cors')
const productRouter = require('./app/routes/productRoutes');
const collectionRouter = require('./app/routes/collectionRoutes');

const app = express()

env.config()

app.use(cors())
app.use(json())

app.use('/api', [productRouter, collectionRouter])

app.listen(process.env.PORT || 3000)