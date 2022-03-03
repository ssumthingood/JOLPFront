import { useState } from 'react';
import MainPresenter from './MainPresenter';
import { useNavigate } from 'react-router';
import axios from 'axios';

function MainConatiner () {
  const navigate = useNavigate();
  let [date, setDate] = useState(new Date());
  console.log(date);

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