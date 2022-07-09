import React,{useState} from 'react'
import useStyles from  './Style';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import { TextField,Typography,Button,Paper } from '@material-ui/core';
import { createPost,updatePost } from '../../actions/posts';
const Form = ({currentId,setCurrentId}) => {
  const [postData,setPostData]=useState({
    creator:'',title:'',message:'',tags:'',selectedFile:''
  });
  const dispatch=useDispatch();
  const classes=useStyles();
  const submitHandler=(event)=>{
    event.preventDefault();
    if(currentId)
    {
      dispatch(updatePost(currentId,postData));
    }
    else{
      dispatch(createPost(postData));
    }
    setPostData({ creator:'',title:'',message:'',tags:'',selectedFile:''});

  }

  const clearHandler=()=>{
    setPostData({ creator:'',title:'',message:'',tags:'',selectedFile:''});
  }
  
  return (
  <Paper className={classes.paper} >
    <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={submitHandler} >
      <Typography variant='h6'>Creating a Memory</Typography>
      <TextField 
        name="creator" 
        variant='outlined' 
        label='Creator' 
        fullWidth 
        value={postData.creator}
        onChange={(e)=>setPostData({...postData,creator:e.target.value})} 
        />

      <TextField 
        name="title" 
        variant='outlined' 
        label='Title' 
        fullWidth 
        value={postData.title}
        onChange={(e)=>setPostData({...postData,title:e.target.value})} 
        />

        <TextField 
        name="message" 
        variant='outlined' 
        label='Message' 
        fullWidth 
        value={postData.message}
        onChange={(e)=>setPostData({...postData,message:e.target.value})}
       />

<TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
     <div className={classes.fileInput}>
       <FileBase 
         type="file" 
         multiple={false} 
         onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} 
         /></div>
         <Button className={classes.buttonSubmit} style={{marginBottom: '1rem'}} variant='contained' color='primary' type='submit' size='large' fullWidth  >Submit</Button>
         <Button   variant='contained' color='secondary' onClick={clearHandler} size='small' fullWidth  >Clear</Button>
    </form>

  </Paper>
  )
}

export default Form
