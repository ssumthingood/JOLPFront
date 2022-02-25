import { useState } from 'react';
import SchedulePresenter from './SchedulePresenter';
import { useNavigate } from 'react-router';
 
function ScheduleConatiner () {
    const navigate = useNavigate();
    let [date, setDate] = useState(new Date());

    function goPrevious():void{
        setDate(new Date());
    }

    function goNext():void{
        setDate(new Date());
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