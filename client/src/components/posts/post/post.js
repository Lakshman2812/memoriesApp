import React from 'react'
import useStyles from './Style';
import {Card,CardContent,CardMedia,CardActions,Button,Typography} from '@material-ui/core';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
const Post = ({post,setCurrrentId}) => {
  const classes=useStyles();
  console.log(post.tags,"hello");
  return (
    <Card className={classes.card} >
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title}  ></CardMedia>
      <div className={classes.overlay} >
        <Typography variant='h6' >{post.creator}</Typography>
        <Typography variant='body2'  >{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2} >
        <Button style={{color:'white'}} size='small' onClick={()=>setCurrrentId(post._id)} ><MoreHorizIcon fontSize='default' /></Button>
      </div>
      <div className={classes.details} >
        {/* <Typography variant='body2' color='textSecondary'  > {post.tags.map((tag)=>`#${tag}`)} </Typography> */}
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>

      <CardContent>
        <Typography  className={classes.title} variant='h5' gutterBottom>{post.message}</Typography>
      </CardContent>
       <CardActions className={classes.cardActions} >
         <Button size='small' color='primary' onClick={()=>{}} ><ThumbUpIcon fontSize='small' />  Like  {post.likeCount}</Button> 
         <Button size='small' color='primary' onClick={()=>{}} ><DeleteIcon/>delete</Button> 
      </CardActions> 
    </Card>
  )
}

export default Post
