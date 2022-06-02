import NewsPresenter from './NewsPresenter';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
// @ts-ignore
import { getCookie, removeCookie, setCookie } from 'Cookie.ts';
import React from 'react';
import axios from 'axios';


function NewsConatiner () {
    const navigate = useNavigate();
    const [user,setUser] = useState<any>([]);
    const [userDetail,setUserDetail] = useState<any>(null);
    const [show ,setShow] = useState<Number>(1);
    const [prediction, setPrediction] = useState<any>(null);

    function auth(){
      if(getCookie('USER')){
        return true;
      }else{
        window.alert('로그인해주세요');
        navigate('/');
        return false;
      };
  }

  useEffect(()=>{
      if(auth()){
        axios.post('http://13.125.81.51:3003/apis/auth/authToken', {
          token:getCookie('USER')
      },{withCredentials:true
      })
      .then((response)=>{
        if(response.data !== -3){
          console.log(response.data);
          setUser(response.data);
        }else if((response.data === -3) && (localStorage.refreshToken)){
          window.alert('refreshing...');
          axios.post('http://13.125.81.51:3003/apis/auth/refreshToken', {
          refreshToken:localStorage.refreshToken
          },{withCredentials:true
          }).then((res)=>{
            if(res.data !== -3){
              window.alert('refreshed');
              setCookie('USER',res.data.token,{
              path:"/",
              secure:false,
              sameSite:"lax",
            });
            localStorage.setItem('refreshToken',res.data.refreshToken);
            window.location.reload();
            }else{
              removeCookie('USER');
              localStorage.removeItem('refreshToken');
              alert('세션이 만료되었습니다. 다시 로그인해 주세요');
              window.location.replace('/');
            }
          });
        }
        });
      }
    },[auth()]);

    useEffect(()=>{
      if(user){
      axios.post('http://13.125.81.51:3003/apis/user/getUserDetail', {
      userid:user.user_id
      },{withCredentials:true})
      .then((res)=>{
          setUserDetail(res.data[0]);
      });
    } 
    },[user]);

    function set1(){
        setShow(1);
        console.log(show);
    }

    function set2(){
        setShow(2);
        console.log(show);
    }

    function set3(){
        setShow(3);
        console.log(show);
    }

    useEffect(()=>{
      if(userDetail){
      axios.post('http://13.125.81.51:3003/apis/football/getPredictInfo',{
          teamid:userDetail.myteam.toString()
      },{withCredentials:true})
      .then((response)=>{
        setPrediction(response.data);
        console.log(response.data);
      })
      }
    },[userDetail]);

    return (
        <NewsPresenter 
        show={show}
        setShow={setShow}
        set1 = {set1}
        set2 = {set2}
        set3 = {set3} />
    )
}

export default NewsConatiner;