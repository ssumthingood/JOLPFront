import { useState } from 'react';
import SchedulePresenter from './SchedulePresenter';
import { useNavigate } from 'react-router';
 

function ScheduleConatiner () {
    const navigate = useNavigate();
    let [date, setDate] = useState(new Date());
    
    return (
        <SchedulePresenter
        date={date}
        setDate={setDate} />
    )
}

export default ScheduleConatiner;