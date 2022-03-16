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
        window.alert('nickname Changed!!');
        navigate(`/mypage/${window.localStorage.ID}`);
        setNick("");
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${myRand}`)
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