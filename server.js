const http= require('http');
const { path } = require('./app');

const port =process.env.PORT||8080;
const app=require('./app');
const server=http.createServer(app);
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/build/index.html'))
})
server.listen(port);