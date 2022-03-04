import CommunityPresenter from './CommunityPresenter';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
 
function CommunityConatiner () {
    const navigate = useNavigate();
    const [show ,setShow] = useState<Number>(1);
    const [users, setUsers] = useState(null);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            setUsers(response.data.reverse());
        })
    },[]);

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
        setUsers = {setUsers} />
    )
}

export default CommunityConatiner;