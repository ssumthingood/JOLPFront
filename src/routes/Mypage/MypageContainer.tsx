import MypagePresenter from './MypagePresenter';
import { useNavigate } from 'react-router';
 

function MypageConatiner () {
    const navigate = useNavigate();

    return (
        <MypagePresenter />
    )
}

export default MypageConatiner;