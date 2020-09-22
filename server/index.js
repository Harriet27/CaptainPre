const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');

app.use(cors());
app.use(bearerToken());
app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.status(200).send(`<h1>API is running at port ${port}</h1>`);
});

const {
    authRouter
} = require('./router');

app.use('/users', authRouter);

app.listen(port, () => console.log(`API active at port ${port}`));
