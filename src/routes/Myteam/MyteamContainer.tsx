import MyteamPresenter from './MyteamPresenter';
import { useNavigate } from 'react-router';
// @ts-ignore
import { getCookie } from 'Cookie.ts';

function MyteamConatiner () {
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
        <MyteamPresenter />
    )
}

export default MyteamConatiner;