import SigninPresenter from './SigninPresenter';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
// @ts-ignore
import agent from 'components/agent';
// @ts-ignore
import { getCookie, setCookie, removeCookie } from 'Cookie.ts';

let SignId ="";
let SignPw="";

function goStart():void{
    const regx = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const space = /\s/g; 
    if(((SignId.length>0) && (SignId.length>0))&& !regx.test(SignId)&& !regx.test(SignPw) && !SignId.match(space) && !SignPw.match(space)){
    axios.post("https://13.125.107.215:3004/apis/auth/signIn", {
        loginid: SignId,
        password: SignPw
    },{withCredentials:true, httpsAgent : {agent}})
    .then((response) => 
        {
        if (response.data.signin !== "no user") {
            console.log(response);
                //console.log(getCookie('token'));
                // if(response.data){
                //     login();
                //     console.log(this.state.isLogined);
                // }
                // setCookie('USER',response.data.token,{
                //     path:"/",
                //     secure:true,
                //     sameSite:"none",
                // });
            }else{
            window.alert("다시해라");
            }
        })
        .catch((error) => {
        }); //로그인 요청 보내고 JWT키 받아서 쿠키에 저장까지
        
            // window.localStorage.setItem("ID", id);
            // console.log(window.localStorage.ID);
            // navigate('/');
    }else{
        window.alert("check plz");
    }
}

function SigninConatiner () {
    const navigate = useNavigate();
    let [id, setId] = useState<string>("");
    let [pw, setPw] = useState<string>("");

    

    // function idChange(e:Event) {
    //     setId(e.toString());
    //     console.log("id"+id)
    // }

    const idChange = useCallback(
        (e) => {
            setId(e.target.value);
            SignId = id;
        },
        [id]
    )

    // function pwChange(e:Event):void {
    //     setPw(e.toString());
    //     console.log("pw"+pw);
    // }

    const pwChange = useCallback(
        (e) => {
            setPw(e.target.value);
            SignPw = pw;
        },
        [pw]
    )

    return (
        <SigninPresenter
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