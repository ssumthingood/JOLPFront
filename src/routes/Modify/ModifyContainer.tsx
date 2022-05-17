import ModifyPresenter from './ModifyPresenter';
import { useNavigate, useParams, useLocation } from 'react-router';
// @ts-ignore
import { getCookie } from 'Cookie.ts';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function ModifyConatiner () {

  const navigate = useNavigate();
  const location:any = useLocation();
  const [user,setUser] = useState<any>([]);
  const [userDetail,setUserDetail] = useState<any>(null);
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [anony, setAnony] = useState('0');
  const [post, setPost] = useState([]);
  const params = useParams();

  function auth(){
      if(getCookie('USER')){
        return true;
      }else{
        window.alert('로그인해주세요');
        window.location.replace('/');
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
  },[auth()]); 

  useEffect(()=>{
    if(location.state===null){
      window.alert('no data');
      navigate('/mypage');
    }
    if(user){
    axios.post('http://13.125.81.51:3003/apis/user/getUserDetail', {
    userid:user.user_id
    },{withCredentials:true})
    .then((res)=>{
      setUserDetail(res.data[0]);
      })
      .then(()=>{
        axios.post('http://13.125.81.51:3003/apis/board/getBoardDetail',{
          board_id : parseInt(location.state.toString())
        },{withCredentials:true})
        .then((response)=>{
          setPost(response.data[0]);
          setTitle(response.data[0].title);
          setContent(response.data[0].content);
        })
      });
    } 
  },[user]);

  const titleChange = useCallback(
    (e) => {
        setTitle(e.target.value);
    },
    [title]
)

  const contentChange = useCallback(
      (e) => {
          setContent(e.target.value);
      },
      [content]
  )

  const anonyChange = useCallback(
      (e) => {
          if(anony === '0'){
              anony = '1';
          }else if(anony==='1'){
              anony = '0';
          };
          setAnony(anony);
      },
      [anony]
  )

  function submit(){
    content.replace('<oembed','<Oembed');
    content.replace('</oembed>','</Oembed>');
    content.replace('<figure','<Figure');
    content.replace('</figure>','</Figure>');
    if(post && location.state){
        axios.post('http://13.125.81.51:3003/apis/board/updateBoard',{
        board_id:parseInt(location.state),
        title:title,
        content:content,
        isanony:anony
        },{
            headers:{
                token:getCookie('USER')
            }
        })
        .then((response)=>{
            console.log(response);
            if(response.status===200){
                window.alert('modifying completed!!');
                navigate(-1);
            }else{
                window.alert('status not 200');
                }
            })
        }else{
            window.alert('post data none');
        }
  }


    return (
        <ModifyPresenter
        user={user}
        userDetail={userDetail}
        auth={auth}
        post={post}
        title={title}
        setTitle={setTitle}
        titleChange={titleChange}
        content={content}
        setContent={setContent}
        contentChange={contentChange}
        anony = {anony}
        setAnony = {setAnony}
        anonyChange={anonyChange}
        submit = {submit} />
    )
}

export default ModifyConatiner;