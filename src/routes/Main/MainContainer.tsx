import { useEffect, useState } from 'react';
import MainPresenter from './MainPresenter';
import { useNavigate, useParams } from 'react-router';
// @ts-ignore
import { getCookie } from 'Cookie.ts';
import axios from 'axios';
import React from 'react';

const today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let nowDay = yyyy + '-' + mm + '-' +dd ;


console.log('\n\
__________████████_____██████\n\
_________█░░░░░░░░██_██░░░░░░█\n\
________█░░░░░░░░░░░█░░░░░░░░░█\n\
_______█░░░░░░░███░░░█░░░░░░░░░█\n\
_______█░░░░███░░░███░█░░░████░█\n\
______█░░░██░░░░░░░░███░██░░░░██\n\
_____█░░░░░░░░░░░░░░░░░█░░░░░░░░███\n\
____█░░░░░░░░░░░░░██████░░░░░████░░█\n\
____█░░░░░░░░░█████░░░████░░██░░██░░█\n\
___██░░░░░░░███░░░░░░░░░░█░░░░░░░░███\n\
__█░░░░░░░░░░░░░░█████████░░█████████\n\
_█░░░░░░░░░░█████_████___████_█████___█\n\
_█░░░░░░░░░░█______█_███__█_____███_█___█\n\
█░░░░░░░░░░░░█___████_████____██_██████\n\
░░░░░░░░░░░░░█████████░░░████████░░░█\n\
░░░░░░░░░░░░░░░░█░░░░░█░░░░░░░░░░░░█\n\
░░░░░░░░░░░░░░░░░░░░██░░░░█░░░░░░██\n\
░░░░░░░░░░░░░░░░░░██░░░░░░░███████\n\
░░░░░░░░░░░░░░░░██░░░░░░░░░░█░░░░░█\n\
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n\
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n\
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n\
░░░░░░░░░░░█████████░░░░░░░░░░░░░░██\n\
░░░░░░░░░░█▒▒▒▒▒▒▒▒███████████████▒▒█\n\
░░░░░░░░░█▒▒███████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█\n\
░░░░░░░░░█▒▒▒▒▒▒▒▒▒█████████████████\n\
░░░░░░░░░░████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█\n\
░░░░░░░░░░░░░░░░░░██████████████████\n\
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n\
██░░░░░░░░░░░░░░░░░░░░░░░░░░░██\n\
▓██░░░░░░░░░░░░░░░░░░░░░░░░██\n\
▓▓▓███░░░░░░░░░░░░░░░░░░░░█\n\
▓▓▓▓▓▓███░░░░░░░░░░░░░░░██\n\
▓▓▓▓▓▓▓▓▓███████████████▓▓█\n\
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██\n\
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█\n\
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█');

function MainConatiner () {
  // const navigate = useNavigate();
  let [date, setDate] = useState(nowDay);//달력에 표시되는 날짜
  const [comu, setComu] = useState<any[]>([]);//추천수 상위 5개 글
  const [matches, setMatch] = useState<any>([]);
  const [user,setUser] = useState<any>([]);
  const [userDetail,setUserDetail] = useState<any>(null);
  const params = useParams();

  function onDatechange(e:Date):void{
    dd = String(e.getDate()).padStart(2, '0');
    mm = String(e.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = e.getFullYear();
    nowDay = yyyy + '-' + mm + '-' +dd ;
    setDate(nowDay);
  }

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
},[]);

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

  useEffect(()=>{
    if(userDetail){
      axios.post('http://13.125.107.215:3003/apis/board/getBoardList',{
        teamid:userDetail.myteam.toString()
      },{withCredentials:true})
      .then((response)=>{
        setComu(response.data.slice(0,5));
        console.log(response.data.slice(0,5));
      });
    }
  },[userDetail]);

  useEffect(()=>{
    if(auth()){
        axios.post('http://13.125.107.215:3003/apis/football/getMatchList',{
          date:date.toString()
        },{
          withCredentials:true
        })
        .then((response)=>{
          setMatch(response.data.slice(0,5));
          console.log(response.data.slice(0,5));
        })
    }
},[date]);

  return (
      <MainPresenter
      matches={matches}
      params={params}
      onDatechange={onDatechange}
      comu = {comu}
      user = {user}
      userDetail = {userDetail} />
  )
}

export default MainConatiner;