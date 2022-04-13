import { useEffect, useState } from 'react';
import SchedulePresenter from './SchedulePresenter';
import { useNavigate } from 'react-router';
import moment from 'moment';
// @ts-ignore
import { getCookie } from 'Cookie.ts';
import axios from 'axios';

let prevNum = 0;
let nextNum = 0;

function ScheduleConatiner () {
    const navigate = useNavigate();
    const [matches, setMatch] = useState<any>([]);
   
    let [date, setDate] = useState(moment().format('YYYY-MM-DD'));

    function auth(){
        if(getCookie('USER')){
          return true;
        }else{
          window.alert('로그인해주세요');
          window.location.replace('/');
          return false;
        };
      }

    function goPrevious():void{
        prevNum++;
        if(prevNum>nextNum){
            setDate(moment().clone().subtract(prevNum-nextNum,'days').format('YYYY-MM-DD'));
        }else{
            setDate(moment().clone().add(nextNum-prevNum,'days').format('YYYY-MM-DD'));
        }
    }

    function goNext():void{
        nextNum++;
        if(nextNum>prevNum){
            setDate(moment().clone().add(nextNum-prevNum,'days').format('YYYY-MM-DD'));
        }else{
            setDate(moment().clone().subtract(prevNum-nextNum,'days').format('YYYY-MM-DD'));
        }
    }

    useEffect(()=>{
        if(auth()){
            axios.post('http://13.125.107.215:3003/apis/football/getMatchList',{
                date:date.toString()
            },{
                withCredentials:true
            })
            .then((response)=>{
                setMatch(response.data);
            })
        }
    },[date]);
 
    return (
        <SchedulePresenter
        matches={matches}
        date={date}
        setDate={setDate}
        goPrevious = {goPrevious}
        goNext = {goNext} />
    )
}

export default ScheduleConatiner;