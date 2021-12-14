import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import useStyles from "./styles"

function PostList({post}) {
    const styles = useStyles()
    return (
       <Card elevation={3} classname={styles.root}>
           <CardContent>
               <div className={styles.cardContent}>
                   <Typography variant="p" fontSize={"18px"}>
                       {post.title}
                   </Typography>
               </div>
           </CardContent>
       </Card>
    );
}

export default PostList;