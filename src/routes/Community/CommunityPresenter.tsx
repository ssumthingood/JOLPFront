import styled from "styled-components"
import Footer from "components/Footer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import MainWrapper from "components/MainWrapper";
import { ReactChild, ReactFragment, ReactPortal } from "react";

const HeadLine1 = styled.h1`
    font-size:25px;
    margin:0;
    padding:15px;
    width:100%;
`;

const ButtonLi = styled.ul`
    width:100%;
    display:flex;
    list-style:none;
    padding:10px;
`;

const ButtonItem = styled.li`
    margin: 2.5px;
`;

const Seperate = styled.p`
    margin: 2.5px;
    font-size: 18px;
`;

const LiButton = styled.button`
    border:none;
    background-color:whitesmoke;
    &:hover{    
        cursor:pointer;
        background-color:gray;
    }
`;

const Contents = styled.div`
    width:100%;
    padding:15px;
`;

const PostingBtn = styled.button`
    margin-left:90%;
`;

function CommunityPresenter({
    show,
    setShow,
    set1,
    set2,
    set3,
    goPosting,
    users,
    setUsers,
}:{
    show:Number,
    setShow:React.Dispatch<React.SetStateAction<Number>>,
    set1:() => void,
    set2:() => void,
    set3:() => void,
    goPosting:() => void,
    users: any,
    setUsers: React.Dispatch<React.SetStateAction<null>>,
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <HeadLine1>Community</HeadLine1>
        <ButtonLi>
            <ButtonItem>
            <LiButton onClick={set1}>최신순</LiButton>
            </ButtonItem>
            <Seperate>|</Seperate>
            <ButtonItem>
            <LiButton onClick={set2}>조회순</LiButton>
            </ButtonItem>
            <Seperate>|</Seperate>
            <ButtonItem>
            <LiButton onClick={set3}>좋아요 많은 순</LiButton>
            </ButtonItem>
        </ButtonLi>
        <Contents>
            <h3>글 리스트</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>User</th>
                        <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users && users.slice(0,30).map((
                        data:
                        {
                        userId: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                        title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                        id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                        }) => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.userId}</td>
                            <td>{data.title}</td>
                        </tr>                            
                    ))}
                    </tbody>
                </table>
            
            </div>
            <PostingBtn onClick={goPosting}>posting</PostingBtn>
        </Contents>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default CommunityPresenter;
