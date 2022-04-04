import MypagePresenter from './MypagePresenter';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useState } from 'react';
 // @ts-ignore
import { getCookie, removeCookie } from 'Cookie.ts';
 
function MypageConatiner () {
    const navigate = useNavigate();
    const [user,setUser] = useState<any>([]);
    const [userDetail,setUserDetail] = useState<any>(null);
    const [myState, setMy] = useState<(any)[]>();
    let [nick, setNick] = useState("");
    let [myTeam, setMyTeam] = useState("0");
    const myRand:number = Math.floor(Math.random()*10+1);

    function auth(){
        if(getCookie('USER')){
          return true;
        }else{
          window.alert('로그인해주세요');
          navigate('/');
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
            console.log("UserDetail searched");
            setUserDetail(res.data[0]);
            });
        } 
    },[user])

    const nickChange = useCallback(
        (e) => {
            setNick(e.target.value);
            console.log(nick)
        },
        [nick]
    );

    const teamChange = useCallback(
        (e) => {
            setMyTeam(e.target.value);
            console.log(myTeam)
        },
        [myTeam]
    )

    function submit(){
        const space = /\s/g; 
        if((nick.length>0 && !nick.match(space)) || myTeam !== "0"){
            window.alert('Change applied!!');
            window.location.reload();
            //navigate(`/mypage/${window.localStorage.ID}`);
            setNick("");
            setMyTeam("");
        }else{
            window.alert("Check plz");
        }
        
    }

    useEffect(()=>{
        if(userDetail){
          axios.get(`https://jsonplaceholder.typicode.com/users/${myRand}`,{withCredentials:true})
        .then((response)=>{
            setMy(response.data);
            if(myState){
                console.log(myState);
            }
        });  
        }
    },[userDetail]);

    return (
        <MypagePresenter
        user={user}
        userDetail={userDetail}
        nick={nick}
        setNick={setNick}
        myState = {myState}
        nickChange = {nickChange}
        submit = {submit}
        myTeam={myTeam}
        setMyTeam = {setMyTeam}
        teamChange = {teamChange} />
    )
}

export default MypageConatiner;