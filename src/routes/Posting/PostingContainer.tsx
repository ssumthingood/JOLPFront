import PostingPresenter from './PostingPresenter';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
// @ts-ignore
import { getCookie } from 'Cookie.ts';

function PostingConatiner () {
    const navigate = useNavigate();
    function submit(){
        navigate(`/community/${window.localStorage.ID}`);
    }

    function auth(){
        if(getCookie('USER')){
          return true;
        }else{
          window.alert('로그인해주세요');
          window.location.replace('/');
          return false;
        };
      }
    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");
    let [anony, setAnony] = useState(false);

    const titleChange = useCallback(
        (e) => {
            setTitle(e.target.value);
            console.log(title)
        },
        [title]
    )

    const contentChange = useCallback(
        (e) => {
            setContent(e.target.value);
            console.log(content)
        },
        [content]
    )

    const anonyChange = useCallback(
        (e) => {
            anony = !anony;
            console.log(anony)
            setAnony(anony);
        },
        [anony]
    )

    return (
        <PostingPresenter
        auth={auth}
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

export default PostingConatiner;