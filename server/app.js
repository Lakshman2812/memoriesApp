const express=require('express');
const cors=require('cors');
const app=express();
const router=require('./routes/posts')

app.use(cors());
app.use(express.json());

app.use((req,res,next)=>{
    const requestTime=new Date().toISOString();
    next();
});
app.use('/posts',router)

module.exports=app;