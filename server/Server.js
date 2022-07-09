const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const express=require('express');
dotenv.config({path:'./config.env'});
const app=require('./app');

//app.use(bodyParser.json({limit:'30mb',extende:true}));
//app.use(bodyParser.urlencoded({limit:'30mb',extende:true}));
app.use(express.urlencoded({ extended: true }))

const db=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABSE_PASSWORD);

mongoose.connect(db,{
  useNewUrlParser: true,
  useUnifiedTopology:true,
  
}).then(()=>console.log('DB connection successfully'));

const port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
  console.log(`app is running on ${port}`); 
});