import React, {useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import "./Home.module.css"
import PostList from '../../Components/PostList/PostList';
import { Link } from 'react-router-dom';




function Home() {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
            axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => {
                setPost(response.data)
                localStorage.setItem("db", JSON.stringify(response.data))
                setLoading(false)
                console.log(post, "test product")
            },)
        }, [])

    return (
       <main>
           <h2>Post List</h2>
           <Grid container justify="center" spacing={4} width="100%">
                {post.map((posts, index) => (
                    <Grid key={index} xs={12} sm={6} md={4} lg={3}>
                       <Link style={{textDecoration:"none"}} to={`/detailproducts/${index}`}>
                           <PostList post={posts}/>
                       </Link>
                    </Grid>
                ))}
           </Grid>
       </main>
    );
}

export default Home;