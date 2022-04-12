import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import CommunityDetailPresenter from './CommunityDetailPresenter';
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
            axios.post(`http://13.125.107.215:3003/apis/board/getBoardDetail`,{
              board_id:params.postid
            },{withCredentials:true})
            .then((response)=>{
            setPost(response.data[0]);
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