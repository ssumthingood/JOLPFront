import NewsPresenter from './NewsPresenter';
import { useState } from 'react';
import { useNavigate } from 'react-router';
// @ts-ignore
import { getCookie } from 'Cookie.ts';
import React from 'react';


function NewsConatiner () {
    const navigate = useNavigate();
    const [show ,setShow] = useState<Number>(1);

    function auth(){
        if(getCookie('USER')){
          return true;
        }else{
          window.alert('로그인해주세요');
          window.location.replace('/');
          return false;
        };
      }

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