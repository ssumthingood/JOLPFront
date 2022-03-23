import { useEffect, useState } from 'react';
import MainPresenter from './MainPresenter';
import { useNavigate } from 'react-router';
import axios from 'axios';

const today = new Date();
let dd = String(today. getDate()). padStart(2, '0');
let mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
let yyyy = today. getFullYear();
let nowDay = yyyy + '-' + mm + '-' +dd ;

function MainConatiner () {
  const navigate = useNavigate();
  let [date, setDate] = useState(nowDay);//달력에 표시되는 날짜
  const [comu, setComu] = useState<any[]>([]);//추천수 상위 5개 글

  function onDatechange(e:Date):void{
    dd = String(e. getDate()). padStart(2, '0');
    mm = String(e. getMonth() + 1). padStart(2, '0'); //January is 0!
    yyyy = e. getFullYear();
    nowDay = yyyy + '-' + mm + '-' +dd ;
    setDate(nowDay);
    console.log(date);
  }

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
          setComu(response.data.reverse().slice(0,5));
        });
        console.log(comu);
  },[]);

  return (
      <MainPresenter 
      onDatechange={onDatechange}
      comu = {comu} />
  )
}

export default MainConatiner;