import MyteamPresenter from './MyteamPresenter';
import { useNavigate } from 'react-router';

function MyteamConatiner () {
    const navigate = useNavigate();

    return (
        <MyteamPresenter />
    )
}

export default MyteamConatiner;