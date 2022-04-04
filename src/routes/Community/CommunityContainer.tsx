import CommunityPresenter from './CommunityPresenter';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../modules';
import { previous, next, set } from '../../modules/listNumber';
// @ts-ignore
import { getCookie, removeCookie } from 'Cookie.ts';
 
function CommunityConatiner () {
    const navigate = useNavigate();
    const [user,setUser] = useState<any>([]);
    const [userDetail,setUserDetail] = useState<any>(null);
    const [show ,setShow] = useState<Number>(1);
    const [allPost, setAll] = useState<any[]>([]);//받아온 전체 글들
    const [showPosts, setPosts] = useState<any[]>([]);//그 페이지에 보여질 글들
    // const [users, setUsers] = useState(null);
    const [pageMax, setMax] = useState<number>(0);
    const params = useParams();

    const listNum = useSelector((state: RootState) => state.listNumber.listNum);
    const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

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
    },[user]); 

    useEffect(()=>{
        if(user){
        axios.post('http://13.125.107.215:3003/apis/user/getUserDetail', {
        userid:user.user_id
        },{withCredentials:true})
        .then((res)=>{
            if(res.data[0].myteam.toString() === params.team){
            console.log(res.data[0]);
            setUserDetail(res.data[0]);
            }else{
                window.alert('자신의 팀만 확인할 수 있습니다.');
                navigate('/main');
            }
        });
    } 
    },[user])

    useEffect(()=>{
        if(allPost.length>0){
            setMax(Math.floor(allPost.length/30));
            if(pageMax>0){
                console.log("최대 페이지 넘버 : "+pageMax);  
               }
        }else{
        axios.get('https://jsonplaceholder.typicode.com/posts',{withCredentials:true})
        .then((response)=>{
            setAll(response.data.reverse());
            if(allPost.length>0){
                setMax(Math.floor(allPost.length/30))
                if(pageMax>0){
                 console.log("최대 페이지 넘버 : "+pageMax);  
                }
                }
            })
        } 
    },[allPost, pageMax]);

    useEffect(()=>{
        if(allPost.length>0){
            if(pageMax ===0){
                setPosts(allPost);
            }else{
                if(listNum===pageMax){
                    setPosts(allPost.slice(listNum*30, allPost.length-1));
                    console.log(listNum+"번 페이지 목록 : "+showPosts);
                }else{
                    setPosts(allPost.slice(listNum*30, (listNum+1)*30-1));
                    console.log(listNum+"번 페이지 목록 : "+showPosts);
                }
            }
        }
    },[listNum,pageMax]);

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
           console.log("최대 페이지 넘버 : "+pageMax);
           console.log("현재 페이지 : "+listNum);
        }  
    }

    function goNext(){
        if(allPost && (listNum<pageMax))
        dispatch(next());
        console.log("최대 페이지 넘버 : "+pageMax);
        console.log("현재 페이지 : "+listNum);
    }

    function goPosting() { 
       navigate(`/posting/${window.localStorage.ID}`);
    }

    return (
        <CommunityPresenter
        params={params}
        userDetail = {userDetail}
        show={show}
        setShow={setShow}
        set1 = {set1}
        set2 = {set2}
        set3 = {set3}
        goPosting={goPosting}
        allPost = {allPost}
        setAll = {setAll}
        showPosts = {showPosts}
        setPosts = {setPosts}
        pageMax={pageMax}
        listNum={listNum}
        goPrev = {goPrev}
        goNext = {goNext}/>
    )
}

export default CommunityConatiner;