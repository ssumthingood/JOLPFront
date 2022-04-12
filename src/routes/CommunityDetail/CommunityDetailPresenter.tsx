import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavBar from 'components/NavBar';
import styled from 'styled-components';
import MainWrapper from 'components/MainWrapper';
import Loading from 'components/Loading';

const HeadLine1 = styled.h1`
    font-size:25px;
    margin:0;
    padding:15px;
    width:100%;
`;

const UserName = styled.div`
    width:100%;
    font-size:15px;
    color:gray;
    padding-left:50px;
`;

const Seperate = styled.p`
    margin: 2.5px;
    font-size: 15px;
    display:inline-block;
`;

const UserContent = styled.div`
    padding:25px;
    font-size:18px;
`;

const Below = styled.div`
    padding:25px;
    width:100%;
    text-align:right;
`;

function CommunityDetailPresenter({
    auth,
    post,
    goCommunity,
}:{
    auth:()=>boolean,
    post:any,
    goCommunity:() => void,
}){
    return (
        <>
        {auth() ?
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <h3>FAN TALK</h3>
        {post ?
        <>
        <HeadLine1>{post.title}</HeadLine1>
        <UserName>
        작성자 <Seperate>|</Seperate> {post.anony===1 ? '익명':post.user_id}
        조회수 <Seperate>|</Seperate> {post.readcount}
        추천수 <Seperate>|</Seperate> {post.likes}
        </UserName>
        <UserContent>{post.content.data}</UserContent>
        </>
        :
        <Loading/>
        }
        <Below>
           <button onClick={goCommunity}>목록으로</button> 
        </Below>
        </MainWrapper>
        <Footer />
        </>:<></>}
        
        </>
    );
}

export default CommunityDetailPresenter;