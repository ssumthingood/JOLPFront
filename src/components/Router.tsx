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
import React from 'react';
import Modify from 'routes/Modify';

const Router:React.FC = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
            <Route path={`/`} element={<Start />}></Route>
            <Route path={`/signup`} element={<Signup />}></Route>
            <Route path={`/signin`} element={<Signin />}></Route>
            <Route path={`/main`} element={<Main />}></Route>
            <Route path={`/myteam`} element={<Myteam />}></Route>
            <Route path={`/community/:team/:pagenum`} element={<Community />}></Route>
            <Route path={`/communitydetail/:team/:postid`} element={<CommunityDetail />}></Route>
            <Route path={`/mypage`} element={<Mypage />}></Route>
            <Route path={`/news/:team/:pagenum`} element={<News />}></Route>
            <Route path={`/newsdetail/:team/:articleid`} element={<NewsDetail />}></Route>
            <Route path={`/posting`} element={<Posting />}></Route>
            <Route path={`/modify`} element={<Modify />}></Route>
            <Route path={`/schedule`} element={<Schedule />}></Route>
            <Route path={`/video/:pagenum`} element={<Video />}></Route>
            <Route path={`/videodetail/:videoid`} element={<VideoDetail />}></Route>
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