import MypagePresenter from './MypagePresenter';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useState } from 'react';
 
function MypageConatiner () {
    const navigate = useNavigate();
    const [myState, setMy] = useState<(any)[]>();
    let [nick, setNick] = useState("");
    let [myTeam, setMyTeam] = useState("0");
    const myRand:number = Math.floor(Math.random()*10+1);

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
        axios.get(`https://jsonplaceholder.typicode.com/users/${myRand}`,{withCredentials:true})
        .then((response)=>{
            setMy(response.data);
            if(myState){
                console.log(myState);
            }
        })
    },[]);

    return (
        <MypagePresenter
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