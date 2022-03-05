import CommunityPresenter from './CommunityPresenter';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../modules';
import { previous, next, set } from '../../modules/listNumber';
 
function CommunityConatiner () {
    const navigate = useNavigate();
    const [show ,setShow] = useState<Number>(1);
    const [users, setUsers] = useState<any[]>([]);
    // const [users, setUsers] = useState(null);
    const [pageMax, setMax] = useState<Number>(0);

    const listNum = useSelector((state: RootState) => state.listNumber.listNum);
    const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

    useEffect(()=>{
        if(users.length>0){
            setMax(Math.floor(users.length/30))
            if(pageMax>0){
             console.log("최대 페이지 넘버 : "+pageMax);   
            }
        }else{
            axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            setUsers(response.data.reverse());
            })
        } 
    },[users]);

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

    function goPrev(){
        if(listNum>0){
           dispatch(previous()); 
           console.log(listNum);
        }  
    }

    function goNext(){
        if(users && (listNum<pageMax))
        dispatch(next());
        console.log(listNum);
    }

    function goPosting() { 
       navigate(`/posting/${window.localStorage.ID}`);
    }

    return (
        <CommunityPresenter
        show={show}
        setShow={setShow}
        set1 = {set1}
        set2 = {set2}
        set3 = {set3}
        goPosting={goPosting}
        users = {users}
        setUsers = {setUsers}
        pageMax={pageMax}
        listNum={listNum}
        goPrev = {goPrev}
        goNext = {goNext}/>
    )
}

export default CommunityConatiner;