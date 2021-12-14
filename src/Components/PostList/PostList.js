import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import useStyles from "./styles"

function PostList({post}) {
    const classes = useStyles()
    return (
       <Card elevation={3} classname={classes.root}>
           <CardContent>
               <div className={classes.cardContent}>
                   <Typography variant="p" fontSize={"18px"}>
                       {post.title}
                   </Typography>
               </div>
               <Typography variant="p" fontSize="14px" color="textSecondary">
                    {post.body}
                </Typography>
           </CardContent>
       </Card>
    );
}

export default PostList;