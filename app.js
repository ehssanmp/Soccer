const express = require('express');
const app = express();
const MailPage=require('./mail');
const path=require('path')
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'build')))
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type','Authorization','Accept');
    if(req.method==='GET'){
        console.log(req.method)
        return res.sendStatus(200)
    }
    next();
  });
app.use('/home',MailPage)
module.exports=app;