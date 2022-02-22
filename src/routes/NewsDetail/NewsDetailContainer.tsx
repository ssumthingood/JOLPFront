import NewsDetailPresenter from './NewsDetailPresenter';
import { useNavigate } from 'react-router';
 
function NewsDetailConatiner () {
    const navigate = useNavigate();

    return (
        <NewsDetailPresenter />
    )
}

export default NewsDetailConatiner;