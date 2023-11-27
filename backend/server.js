const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieSession = require('cookie-session');
const path = require('path');

const AccountRouter = require('./routes/account');
const CategoryRouter = require('./routes/category');

const app = express();
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://xianhanchen:xianhan@cluster0.3uugri4.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI);

app.use(express.json());
app.use(express.static('dist'));

app.use(cors());

app.use(cookieSession({
    name: 'session',
    keys: ['pineapple'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
}));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use('/account', AccountRouter);
app.use('/category', CategoryRouter);

app.listen(3000, () => {
    console.log('listening on 3000');
    console.log('mongoDB is connected');
});

// export for category.test.js
module.exports = {
    app,
}