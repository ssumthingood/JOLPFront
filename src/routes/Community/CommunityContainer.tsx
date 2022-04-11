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
    const [show ,setShow] = useState<number>(1);
    const [maxPageNumber, setMaxNumber] = useState<number>(1);
    const [nowShow, setNowshow] = useState<any[]>([]);//현재 페이지에 보여질 글(30개컷)
    const params = useParams();

    // const listNum = useSelector((state: RootState) => state.listNumber.listNum);
    // const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

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
    },[auth()]); 

    useEffect(()=>{
        if(user){
        axios.post('http://13.125.107.215:3003/apis/user/getUserDetail', {
        userid:user.user_id
        },{withCredentials:true})
        .then((res)=>{
            if(res.data[0].myteam.toString() === params.team){
            setUserDetail(res.data[0]);
            }else{
                window.alert('자신의 팀만 확인할 수 있습니다.');
                navigate('/main');
            }
        });
    } 
    },[user])

    useEffect(()=>{
        if(userDetail){
        axios.get('https://jsonplaceholder.typicode.com/posts',{withCredentials:true})
        .then((response)=>{
            setMaxNumber(Math.floor(response.data.length/30)+1);
            if(params.pagenum){
                if(parseInt(params.pagenum) < maxPageNumber){
                    setNowshow(response.data.reverse().slice((parseInt(params.pagenum)-1)*30, parseInt(params.pagenum)*30));
                }else{
                    setNowshow(response.data.reverse().slice((parseInt(params.pagenum)-1)*30, response.data.length));
                }
            }else{
                window.alert('params.pagenum err');
                navigate('/main');
            }
        })
        }
    },[userDetail, params.pagenum, maxPageNumber]);

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
        if(params.pagenum && parseInt(params.pagenum)>0){
        navigate(`/community/${params.team}/${parseInt(params.pagenum)-1}`);
        }  
    }

    function goNext(){
        if(params.pagenum && (parseInt(params.pagenum) < maxPageNumber)){
        navigate(`/community/${params.team}/${parseInt(params.pagenum)+1}`);
        }
    }

    const ifFirst= ()=>{
        if(params.pagenum && parseInt(params.pagenum) === 1){
            return true;
        }
        return false;
    }

    const ifLast= ()=>{
        if(params.pagenum && parseInt(params.pagenum) < maxPageNumber){
            return true;
        }
        return false;
    }

    function goPosting() { 
       navigate(`/posting`);
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
        //listNum={listNum}
        maxPageNumber = {maxPageNumber}
        nowShow = {nowShow}
        ifFirst = {ifFirst}
        ifLast = {ifLast}
        goPrev = {goPrev}
        goNext = {goNext}/>
    )
}

export default CommunityConatiner;