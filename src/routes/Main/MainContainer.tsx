import { useState } from 'react';
import MainPresenter from './MainPresenter';
import { useNavigate } from 'react-router';
import axios from 'axios';

function MainConatiner () {
  const navigate = useNavigate();
  let [date, setDate] = useState(new Date());
  console.log(date);

    // const URL = "/bootstrap-static/";

    // axios.post('https://fantasy.premierleague.com/api/bootstrap-static/', {withCredential:true})
    // .then((response) => {
    //   if (response) {
    //     console.log(response.data);
    //   } else {
    //     console.log("NO");
    //   }
    // });

    // axios.post("/api",
    // {withCredential:true})
    // .then((response) => {
    //   if (response) {
    //     console.log(response.data);
    //   } else {
    //     console.log("NO");
    //   }
    // });

  function onDatechange(e:Date):void{
    setDate(e);
    console.log(window.localStorage.ID);
  }

    return (
        <MainPresenter 
        onDatechange={onDatechange} />
    )
}

export default MainConatiner;