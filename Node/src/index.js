require('dotenv').config();
const express = require('express');
const { json } = require('express');

const multer = require('multer');
const upload = multer({ dest: 'tmp_uploads/' });
const fs = require('fs'); // need or not?
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const session = require('express-session');
const MysqlStore = require('express-mysql-session');
const db = require(__dirname + '/db_connect2');
const sessionStore = new MysqlStore({}, db);

const moment = require('moment-timezone');
const cors = require('cors');
const app = express();

app.use(cors());
//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
//parse application/json
app.use(express.json());

//homepage
app.get('/', (req, res) => {
    res.send(`
    Article
    `);
})

//article
app.use('/article', require(__dirname + '/routes/article'));

//article-comment
app.use('/article/comment', require(__dirname + '/routes/article_comment'));

//404
app.use((req, res) => { 
    res.type('text/plain');
    res.status(404).end('找不到該網頁');
})

//server port
app.listen(5566, () => { 
    console.log('伺服器啟動');
})