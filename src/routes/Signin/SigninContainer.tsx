import SigninPresenter from './SigninPresenter';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
// @ts-ignore
import { getCookie, setCookie, removeCookie } from 'Cookie.ts';
import React from 'react';
// @ts-ignore
//import agent from 'components/Agent.js';
function SigninConatiner () {
    const navigate = useNavigate();
    let [id, setId] = useState<string>("");
    let [pw, setPw] = useState<string>("");

    function auth(){
        if(getCookie('USER')){
        window.alert('로그인 중에는 이용하실 수 없습니다.');
        window.location.replace('/');
        return false;
        }else{
          return true;
        };
      }

    function goStart():void{
        const regx = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        const space = /\s/g; 
        if(((id.length>0) && (pw.length>0))&& !regx.test(id)&& !regx.test(pw) && !id.match(space) && !pw.match(space)){
        axios.post("http://13.125.107.215:3003/apis/auth/signIn", {
            loginid: id,
            password: pw
        },{withCredentials:true,
           //httpsAgent : {agent} 
        })
        .then((response) => 
            {
            if (response.data.token) {
                    setCookie('USER',response.data.token,{
                        path:"/",
                        secure:true,
                        sameSite:"none",
                    });
            window.alert('Login completed');
            navigate('/');
            } else {
            window.alert("다시해라");
            };
        })
        .catch((error) => {
        }); //로그인 요청 보내고 JWT키 받아서 쿠키에 저장까지

        }else{
        window.alert("check plz");
        }
    }

    const idChange = useCallback(
        (e) => {
            setId(e.target.value);
        },
        [id]
    )

    const pwChange = useCallback(
        (e) => {
            setPw(e.target.value);
        },
        [pw]
    )

    return (
        <SigninPresenter
        auth={auth}
        id = {id}
        pw = {pw}
        setId={setId}
        setPw = {setPw}
        idChange = {idChange}
        pwChange = {pwChange}
        goStart = {goStart} />
    )
}

export default SigninConatiner;