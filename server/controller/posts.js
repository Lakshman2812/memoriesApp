const { default: mongoose } = require('mongoose');
const postMessage=require('../model/postMessage');
exports.getPost=async(req,res)=>{
   try{
        const postMessages=await postMessage.find();
       
        res.status(200).json(postMessages)
   }catch(err){
      res.status(404).json({
          status:'failed',
          message:err
      })
   }
}
exports.createPost=async(req,res)=>{
    const post=req.body;
    // console.log(post,"hii")
    console.log(post.tags);
    const newPost=new postMessage({...post});
    try{
        
       await newPost.save();
       res.status(201).json(newPost)
    }catch(err){
        res.status(404).json({
            status:'failed',
            message:err
        })
    }
}
exports.updatePost=async(req,res)=>{
    const {id:_id}=req.params;
    const post=req.body;
    try{
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id');
       const updatedPost= await postMessage.findByIdAndUpdate(_id,post,{new:true});
       res.status(201).json(updatedPost);

    }catch(err){
        res.status(404).json(err);
    }
}