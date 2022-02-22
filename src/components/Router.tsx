import { BrowserRouter,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import Start from '../routes/Start';
import Signup from '../routes/Signup';
import Signin from '../routes/Signin';
import Main from '../routes/Main';
import Myteam from '../routes/Myteam';
import Community from '../routes/Community';
import CommunityDetail from '../routes/CommunityDetail';
import Mypage from '../routes/Mypage';
import News from '../routes/News';
import NewsDetail from '../routes/NewsDetail';
import Posting from '../routes/Posting';
import Schedule from '../routes/Schedule';
import Video from '../routes/Video';
import VideoDetail from '../routes/VideoDetail';

const Router:React.FC = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Start />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path={`/main/${window.localStorage.ID}`} element={<Main />}></Route>
            <Route path={`/myteam/${window.localStorage.ID}`} element={<Myteam />}></Route>
            <Route path={`/community/${window.localStorage.ID}`} element={<Community />}></Route>
            <Route path={`/communitydetail/${window.localStorage.ID}/:postid`} element={<CommunityDetail />}></Route>
            <Route path={`/mypage/${window.localStorage.ID}`} element={<Mypage />}></Route>
            <Route path={`/news/${window.localStorage.ID}`} element={<News />}></Route>
            <Route path={`/newsdetail/${window.localStorage.ID}/:articleid`} element={<NewsDetail />}></Route>
            <Route path={`/posting/${window.localStorage.ID}`} element={<Posting />}></Route>
            <Route path={`/schedule/${window.localStorage.ID}`} element={<Schedule />}></Route>
            <Route path={`/video/${window.localStorage.ID}`} element={<Video />}></Route>
            <Route path={`/videodetail/${window.localStorage.ID}/:videoid`} element={<VideoDetail />}></Route>
            <Route
            path="*"
            element={<Navigate to="/" />}
            />
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default Router;