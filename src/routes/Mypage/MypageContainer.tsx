import MypagePresenter from './MypagePresenter';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';
 
function MypageConatiner () {
    const navigate = useNavigate();
    const [myState, setMy] = useState<any[]>([]);
    const myRand:number = Math.floor(Math.random()*10+1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${myRand}`)
        .then((response)=>{
            setMy(response.data);
            if(myState !== []){
                console.log(myState);
            }
        })
    },[]);

    return (
        <MypagePresenter
        myState = {myState} />
    )
}

export default MypageConatiner;