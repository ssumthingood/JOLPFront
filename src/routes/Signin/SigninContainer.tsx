import SigninPresenter from './SigninPresenter';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
// @ts-ignore
import { getCookie, setCookie } from 'Cookie.ts';
 
function SigninConatiner () {
    const navigate = useNavigate();
    let [id, setId] = useState<string>("");
    let [pw, setPw] = useState<string>("");

    function goStart():void{
        const regx = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        const space = /\s/g; 
        if(((id.length>0) && (pw.length>0))&& !regx.test(id)&& !regx.test(pw) && !id.match(space) && !pw.match(space)){
        // axios.post("http://localhost:3003/signin", {
        //     loginid: id,
        //     password: pw
        // },{withCredentials: true})
        // .then((response) => 
        //     {
        //         console.log(response.status);
        //          if (response.status === 200) {
        //             if(response.data){
        //                 login();
        //                 console.log(this.state.isLogined);
        //             }
        //          }else{
        //             window.alert("다시해라");
        //             }
        //     })
        //     .catch((error) => {
        //     }); 로그인 요청 보내고 JWT키 받아서 쿠키에 저장까지
        
            window.localStorage.setItem("ID", id);
            console.log(window.localStorage.ID);
            navigate('/');
        }else{
            window.alert("check plz");
        }
    }

    // function idChange(e:Event) {
    //     setId(e.toString());
    //     console.log("id"+id)
    // }

    const idChange = useCallback(
        (e) => {
            setId(e.target.value);
            console.log(id)
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
            console.log(pw)
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