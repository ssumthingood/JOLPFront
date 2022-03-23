import { useState } from 'react';
import SchedulePresenter from './SchedulePresenter';
import { useNavigate } from 'react-router';
import moment from 'moment';

let prevNum = 0;
let nextNum = 0;

function ScheduleConatiner () {
    const navigate = useNavigate();
   
    let [date, setDate] = useState(moment().format('YYYY-MM-DD'));

    function goPrevious():void{
        prevNum++;
        if(prevNum>nextNum){
            setDate(moment().clone().subtract(prevNum-nextNum,'days').format('YYYY-MM-DD'));
            console.log(date);
        }else{
            setDate(moment().clone().add(nextNum-prevNum,'days').format('YYYY-MM-DD'));
        }
        console.log(prevNum);
    }

    function goNext():void{
        nextNum++;
        if(nextNum>prevNum){
            setDate(moment().clone().add(nextNum-prevNum,'days').format('YYYY-MM-DD'));
            console.log(date);
        }else{
            setDate(moment().clone().subtract(prevNum-nextNum,'days').format('YYYY-MM-DD'));
        }
        console.log(nextNum);
    }
 
    return (
        <SchedulePresenter
        date={date}
        setDate={setDate}
        goPrevious = {goPrevious}
        goNext = {goNext} />
    )
}

export default ScheduleConatiner;