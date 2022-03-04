import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import CommunityDetailPresenter from './CommunityDetailPresenter';

function CommunityDetailConatiner () {
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const params = useParams();

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
        .then((response)=>{
            setPost(response.data);
            if(post){
                console.log(post);
            };
        })
    },[]);
    
    return (
        <CommunityDetailPresenter
        post={post} />
    )
}

export default CommunityDetailConatiner;