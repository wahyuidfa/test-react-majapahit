import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    let data =JSON.parse(localStorage.getItem("postdb"));
    const [post, setPost] = useState()
    const {index} = useParams();

    console.log(data, "test data")
    useEffect(() => {
        setPost(data)
    },[])

    let postData = data[index]
    return (
        <div>
            <div>

            {postData.title}
            </div>
            <p>{postData.body}</p>
        </div>
    );
}
export default Detail;