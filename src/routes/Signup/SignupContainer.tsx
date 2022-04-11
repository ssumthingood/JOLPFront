import SignupPresenter from './SignupPresenter';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
// @ts-ignore
import { getCookie } from 'Cookie.ts';

function SignupConatiner () {
    const navigate = useNavigate();
    let [name, setName] = useState<string>("");
    let [id, setId] = useState<string>("");
    let [pw, setPw] = useState<string>("");
    let [pw2, setPw2] = useState<string>("");
    let [myTeam, setMyTeam] = useState("0");

    function auth(){
        if(getCookie('USER')){
        window.alert('로그인 중에는 이용하실 수 없습니다.');
        window.location.replace('/');
        return true;
        }else{
          return false;
        };
      }

    function goStart():void{
        const regx = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        const space = /\s/g; 
        if((pw === pw2) && (id.length>0) && (myTeam !=="0")&& !regx.test(id) && !regx.test(pw) && !id.match(space) && !pw.match(space) ) {
            axios.post('http://13.125.107.215:3003/apis/auth/signUp',{
            loginid:id,
            password:pw,
            myteam:myTeam,
            nickname:name,
            },{withCredentials:true})
            .then((response)=>{
                window.alert(`회원 id : ${response.data}`);
            });
            navigate('/');
        }else{
            window.alert("check plz");
        }
    }

    const nameChange = useCallback(
        (e) => {
            setName(e.target.value);
        },
        [name]
    )

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

    const pw2Change = useCallback(
        (e) => {
            setPw2(e.target.value);
        },
        [pw2]
    )

    const teamChange = useCallback(
        (e) => {
            setMyTeam(e.target.value);
        },
        [myTeam]
    )

    return (
        <SignupPresenter
        auth={auth}
        name={name}
        setName={setName}
        nameChange={nameChange}
        id = {id}
        pw = {pw}
        pw2 = {pw2}
        setId={setId}
        setPw = {setPw}
        setPw2 = {setPw2}
        idChange = {idChange}
        pwChange = {pwChange}
        pw2Change = {pw2Change}
        myTeam={myTeam}
        setMyTeam = {setMyTeam}
        teamChange = {teamChange}
        goStart = {goStart} />
    )
}

export default SignupConatiner;