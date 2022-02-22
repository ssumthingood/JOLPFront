import StartPresenter from './StartPresenter';
import { useNavigate } from 'react-router';
import { useState } from 'react';

function StartConatiner () {
  const navigate = useNavigate();

  function goMain(){
    window.location.assign(`/main/${window.localStorage.ID}`);
    // navigate(`/main/${window.localStorage.ID}`); 왜 시작부분만 이렇게 해야할까
  }

  function goSignup(){
    navigate('/signup');
  }

  function goSignin(){
    navigate('/signin');
  }

    return (
        <StartPresenter
        goMain={goMain}
        goSignup={goSignup}
        goSignin={goSignin}/>
    )
}

export default StartConatiner;