const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const router = express.Router();
const productRoute = require('./Routes/ProductRoute')


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router.use('/api/v1/book/',productRoute);

app.use('/',router)
// app.use('/api/v1/userinfo/',userInfoRoute);
app.listen(7777,()=>{
    console.log('Start API')
});
