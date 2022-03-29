import StartPresenter from './StartPresenter';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
// @ts-ignore
import { getCookie, setCookie, removeCookie } from 'Cookie.ts';
import axios from 'axios';

function StartConatiner () {
  const navigate = useNavigate();
  const [user,setUser] = useState(null);

  useEffect(()=>{
    if(auth()){
      axios.post('http://13.125.107.215:3003/apis/auth/authToken', {
        token:getCookie('USER')
    },{withCredentials:true
    })
    .then((response)=>{
      setUser(response.data);
      });
    }
  },[]);

  function goMain(){
    if(getCookie('USER')){
      window.location.assign(`/main`);
    }//쿠키 내에 로그인정보 있을시 시작화면으로
    // if(window.localStorage.ID){
    //   window.location.assign(`/main/${window.localStorage.ID}`);
    // }
    // navigate(`/main/${window.localStorage.ID}`); 왜 시작부분만 이렇게 해야할까
  }

  function goSignup(){
    navigate('/signup');
  }

  function goSignin(){
    navigate('/signin');
  }

  function auth(){
    if(getCookie('USER')){
      return true;
    }else{
      return false;
    };
  }

    return (
        <StartPresenter
        goMain={goMain}
        goSignup={goSignup}
        goSignin={goSignin}
        auth = {auth}
        user = {user}/>
    )
}

export default StartConatiner;