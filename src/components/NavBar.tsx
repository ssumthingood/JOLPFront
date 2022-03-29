import styled from 'styled-components';
// @ts-ignore
import { getCookie, removeCookie } from 'Cookie.ts';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MainBar = styled.div`
    min-width:1500px;;
    background-color:black;
    color: whitesmoke;
    font-size:15px;
    height:25px;
    line-height:25px;
`;

const Menus = styled.ul`
    width:100%;
    list-style:none;
    display:flex;
    padding-left:70px;
`;

const Menu = styled.li`
    margin: 0 30px;
    min-width:10%;
    text-align:center;
    height:25px;
`;

const MyLink = styled.a`
display:block;
    height:25px;
    color:white;
    &:hover{
        color:black;
        background-color:white;
        transition:0.5s ease;
        cursor:pointer;
    }
`;

const Welcome = styled.span`
    display:block;
    color:white;
    margin: 0 20px;
    min-width:100px;
    //min-width:10%
    text-align:center;
    height:25px;
    overflow:hidden;
`;

const LogoutBtn = styled.button`
    // width:180px;
    min-width:10%;
    height:25px;
    margin: 0 30px;
    background-color:black;
    color:white;
    border:none;
    &:hover{
        color:black;
        background-color:white;
        transition:0.5s ease;
        cursor:pointer;
    }
`;

function NavBar () {
    const [user,setUser] = useState<any>([]);
    const [userDetail,setUserDetail] = useState<any>(null);

    function auth(){
        if(getCookie('USER')){
          return true;
        }else{
          return false;
        };
    }

    useEffect(()=>{
        axios.post('http://13.125.107.215:3003/apis/auth/authToken', {
        token:getCookie('USER')
        },{withCredentials:true})
        .then((response)=>{
        setUser(response.data);
        });
    },[])

    useEffect(()=>{
        if(userDetail === null){
            axios.post('http://13.125.107.215:3003/apis/user/getUserDetail', {
            userid:user.user_id
            },{withCredentials:true})
            .then((res)=>{
            setUserDetail(res.data);
            });
        }
         
    },[])
    

    function logOut() {
            removeCookie('USER')
            window.location.replace('/');
    }

    return (
        <>
        <MainBar>
            <Menus>
                <Menu><MyLink href={`/myteam/${window.localStorage.ID}`}>my team</MyLink></Menu>
                <Menu><MyLink href={userDetail ? `/news/${userDetail.myteam}`:'/'}>news</MyLink></Menu>
                <Menu><MyLink href={`/schedule/${window.localStorage.ID}`}>schedule</MyLink></Menu>
                <Menu><MyLink href={userDetail ? `/community/${userDetail.myteam}`:'/'}>community</MyLink></Menu>
                <Menu><MyLink href={`/mypage/${window.localStorage.ID}`}>mypage</MyLink></Menu>
                <Welcome>Welcome, {user.nickname}!</Welcome>
                <LogoutBtn onClick={logOut}>logout</LogoutBtn>
            </Menus>
        </MainBar>
        </>
    )
}

export default NavBar;