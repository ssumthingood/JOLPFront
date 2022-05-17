import MypagePresenter from './MypagePresenter';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useState } from 'react';
 // @ts-ignore
import { getCookie, removeCookie } from 'Cookie.ts';
import React from 'react';
 
function MypageConatiner () {
    const navigate = useNavigate();
    const [user,setUser] = useState<any>([]);
    const [userDetail,setUserDetail] = useState<any>(null);
    const [myPost, setMypost] = useState<(any)[]>([]);
    let [nick, setNick] = useState("");
    let [myTeam, setMyTeam] = useState("0");

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
            axios.post('http://13.125.81.51:3003/apis/auth/authToken', {
            token:getCookie('USER')
            },{withCredentials:true})
            .then((response)=>{
            setUser(response.data);
            });
        }
    },[]);

    useEffect(()=>{
        if(user){
            axios.post('http://13.125.81.51:3003/apis/user/getUserDetail', {
            userid:user.user_id
            },{withCredentials:true})
            .then((res)=>{
            setUserDetail(res.data[0]);
            });
        } 
    },[user])

    const nickChange = useCallback(
        (e) => {
            setNick(e.target.value);
        },
        [nick]
    );

    const teamChange = useCallback(
        (e) => {
            setMyTeam(e.target.value);
        },
        [myTeam]
    )

    const modifyPost=(postid, e) => {
        e.preventDefault();
        console.log(postid);
        navigate('/modify', {state : postid.toString()});
    }

    const deletePost=(postid, e) => {
        e.preventDefault();
        axios.post('http://13.125.81.51:3003/apis/board/deleteBoard',{
            board_id: postid
        },{
            headers:{
                token:getCookie('USER')
            }
        }).then((response)=>{
        window.alert('삭제되었습니다.');
        window.location.replace('/mypage');
        })
    }

    function signOut() {
        if(userDetail){
            axios.post('http://13.125.81.51:3003/apis/auth/signOut',{
                loginid:userDetail.loginid
            },{withCredentials:true})
            .then((response)=>{
                removeCookie('USER');
                window.alert('회원탈퇴 처리되었습니다.');
                window.location.replace('/');  
            })
        };
    }

    function submit(){
        const space = /\s/g; 
        if((nick.length>0 && !nick.match(space)) || myTeam !== "0"){
            setNick("");
            setMyTeam("");
            window.alert('Change applied!!');
            window.location.reload();
        }else{
            window.alert("Check plz");
        }
    }

    useEffect(()=>{
        if(userDetail){
        axios.post('http://13.125.81.51:3003/apis/board/getBoardList',{
        userid:user.user_id.toString()
        },{withCredentials:true})
        .then((response)=>{
            setMypost(response.data.reverse());
            })
        }
    },[userDetail]);

    return (
        <MypagePresenter
        user={user}
        userDetail={userDetail}
        nick={nick}
        setNick={setNick}
        myPost = {myPost}
        nickChange = {nickChange}
        submit = {submit}
        myTeam={myTeam}
        setMyTeam = {setMyTeam}
        teamChange = {teamChange}
        modifyPost={modifyPost}
        deletePost={deletePost}
        signOut={signOut}/>
    )
}

export default MypageConatiner;