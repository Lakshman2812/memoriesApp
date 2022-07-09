const express=require('express');
const router=express.Router();
const controller=require('../controller/posts')
router
.route('/').get(controller.getPost).post(controller.createPost);
router
.route('/:id').patch(controller.updatePost);
module.exports=router;