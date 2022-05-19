import MyteamPresenter from './MyteamPresenter';
import { useNavigate } from 'react-router';
// @ts-ignore
import { getCookie } from 'Cookie.ts';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GetSquad from 'components/GetSquad';

function MyteamConatiner () {
    const navigate = useNavigate();
    const [user,setUser] = useState<any>([]);
    const [userDetail,setUserDetail] = useState<any>(null);
    let [teamInfo, setInfo] = useState([]);
    let [career, setCareer] = useState([]);
    const [squad, setSquad] = useState<string[]>([]);

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
            axios.post('http://13.125.81.51:3003/apis/auth/authToken', {
            token:getCookie('USER')
            },{withCredentials:true})
            .then((response)=>{
            setUser(response.data);
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

    useEffect(()=>{
      if(userDetail){
        setSquad(GetSquad(userDetail.myteam.toString()));
        console.log(squad);
        axios.post('http://13.125.81.51:3003/apis/football/getTeamInfo',{
          teamid:userDetail.myteam
        },{withCredentials:true})
        .then((res)=>{
          setInfo(res.data[0]);
        });

        axios.post('http://13.125.81.51:3003/apis/football/getTeamCareer',{
          teamid:userDetail.myteam
        },{withCredentials:true})
        .then((res)=>{
          setCareer(res.data[0]);
        });
      }
    },[userDetail])

    return (
        <MyteamPresenter
        user={user}
        userDetail={userDetail}
        teamInfo = {teamInfo}
        career = {career}
        squad = {squad} />
    )
}

export default MyteamConatiner;