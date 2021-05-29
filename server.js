const http= require('http');
const express = require('express');
const app = express();
const cors=require('cors');
const request=require('request');
const path=require('path')
const port =process.env.PORT||5000;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'build')))
  app.use(cors())
  app.post('/email',(req,res)=>{
    const data={
        members:[
            {
                email_address:req.body.email,
                status:'subscribed'
            }
        ]
    }
    const postData=JSON.stringify(data);
    const options={
        url:'https://us6.api.mailchimp.com/3.0/lists/5bdbc1f8c6',
        method:'POST',
        headers:{
            Authorization:'auth 65b02cfdd692c7f3a4badcbbc6b1fd3b-us6'
        },
        body:postData
    }
    request(options,(err,response,body)=>{
        if(response.statusCode===200){
            console.log("hi")
        }
        else{
            
            res.status(401).json({
                error:err
            })
        }
    })
  })

app.get('*',(req,res)=>{
    res.sendFile(Path.join(__dirname+'/build/index.html'))
})
app.listen(port,console.log("fine"))