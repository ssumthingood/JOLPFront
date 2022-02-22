import VideoDetailPresenter from './VideoDetailPresenter';
import { useNavigate } from 'react-router';

function VideoDetailConatiner () {
    const navigate = useNavigate();

    return (
        <VideoDetailPresenter />
    )
}

export default VideoDetailConatiner;