import VideoDetailPresenter from './VideoDetailPresenter';
import { useNavigate } from 'react-router';
// @ts-ignore
import { getCookie } from 'Cookie.ts';

function VideoDetailConatiner () {
    const navigate = useNavigate();

    function auth(){
        if(getCookie('USER')){
          return true;
        }else{
          window.alert('로그인해주세요');
          window.location.replace('/');
          return false;
        };
      }

    return (
        <VideoDetailPresenter />
    )
}

export default VideoDetailConatiner;