import NewsDetailPresenter from './NewsDetailPresenter';
import { useNavigate } from 'react-router';
// @ts-ignore
import { getCookie } from 'Cookie.ts';
import React from 'react';
 
function NewsDetailConatiner () {
    const navigate = useNavigate();

    function auth(){
        if(getCookie('USER')){
          return true;
        }else{
          window.alert('로그인해주세요');
          window.location.replace('/');
          return false;
        };
      }

    return (
        <NewsDetailPresenter />
    )
}

export default NewsDetailConatiner;