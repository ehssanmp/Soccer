const express=require('express');
const request=require('request');
const router=express.Router();

router.post("/email",(req,res,next)=>{
    const data={
        members:[
            {
                email_address:req.body.email,
                status:'subscribed',
                merge_fields:{
                    FNAME:req.body.firstname,
                    LNAME:req.body.lastname
                }
            }
        ]
    }
    const postData=JSON.stringify(data);
    const options={
        url:'https://us6.api.mailchimp.com/3.0/lists/5bdbc1f8c6',
        method:'POST',
        headers:{
            Authorization:'auth 8e71c0e8916746d5db141ace553ed385-us6'
        },
        body:postData
    }
    request(options,(err,response,body)=>{
        if(response.statusCode===200){
            console.log("hi")
        }
        else{
            console.log(err)
        }
    })

})
module.exports=router