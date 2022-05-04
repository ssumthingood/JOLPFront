import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import CommunityDetailPresenter from './CommunityDetailPresenter';
// @ts-ignore
import { getCookie } from 'Cookie.ts';
import React from 'react';

function CommunityDetailConatiner () {
    const navigate = useNavigate();
    const [user,setUser] = useState<any>([]);
    const [userDetail,setUserDetail] = useState<any>(null);
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

    useEffect(()=>{
      if(auth()){
          axios.post('http://13.125.107.215:3003/apis/auth/authToken', {
          token:getCookie('USER')
          },{withCredentials:true})
          .then((response)=>{
          setUser(response.data);
          });
        }  
    },[auth()]);

    useEffect(()=>{
      if(user){
      axios.post('http://13.125.107.215:3003/apis/user/getUserDetail', {
      userid:user.user_id
      },{withCredentials:true})
      .then((res)=>{
        setUserDetail(res.data[0]);
      });
    } 
    },[user]);

    function goCommunity(){
    navigate(`/community/${userDetail.myteam}/1`);
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
        user={user}
        userDetail={userDetail}
        post={post}
        goCommunity = {goCommunity} />
    )
}

export default CommunityDetailConatiner;