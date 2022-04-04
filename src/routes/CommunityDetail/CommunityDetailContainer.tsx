import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {useSelector, useDispatch} from 'react-redux';
import CommunityDetailPresenter from './CommunityDetailPresenter';
import { RootState } from '../../modules';
import { previous, next, set } from '../../modules/listNumber';
// @ts-ignore
import { getCookie } from 'Cookie.ts';

function CommunityDetailConatiner () {
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const params = useParams();

    function auth(){
        if(getCookie('USER')){
          return true;
        }else{
          window.alert('로그인해주세요');
          window.location.replace('/');
          return false;
        };
      }

    function goCommunity(){
    navigate(`/community/${params.postid}/${params.postid}`);
    };

    useEffect(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postid}`,{withCredentials:true})
            .then((response)=>{
            setPost(response.data);
            if(post){
            console.log(post);
            };
        })
    },[]);
    
    return (
        <CommunityDetailPresenter
        auth={auth}
        post={post}
        goCommunity = {goCommunity} />
    )
}

export default CommunityDetailConatiner;