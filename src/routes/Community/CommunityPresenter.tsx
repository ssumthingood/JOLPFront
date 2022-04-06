import styled from "styled-components"
import Footer from "components/Footer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import MainWrapper from "components/MainWrapper";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import Loading from "components/Loading";

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
    background-color:black;
    color:#6aebcf;
    &:hover{    
        cursor:pointer;
        background-color:gray;
    }
`;

const Contents = styled.div`
    width:100%;
    padding:15px;
`;

const Table = styled.table`
    width:90%;
    text-align:left;
`;

const Th1 = styled.th`
    width:10%;
    padding:10px;
`;

const Th2 = styled.th`
    width:10%;
    padding:10px;
`;

const Th3 = styled.th`
    width:80%;
    padding:10px;
`;

const BodyTr = styled.tr`
`;

const Td1 = styled.td`
    width:10%;
    padding:3px 10px;
    border-bottom: 2px solid whitesmoke;
    border-right:2px solid whitesmoke;
`;

const Td2 = styled.td`
    width:10%;
    padding:3px 10px;
    border-bottom: 2px solid whitesmoke;
    border-right:2px solid whitesmoke;
`;

const Td3 = styled.td`
    width:80%;
    padding:3px 10px;
    border-bottom: 2px solid whitesmoke;
    border-right:2px solid whitesmoke;
`;

const GoDetail = styled.a`
    &:hover{
        background-color:whitesmoke;
    }
    display:block;
    width:100%;
    height:100%;
`;

const Paging = styled.div`
    width:100%;
    padding:5px;
    text-align:center;
`;

const PrevBtn = styled.button`
    margin:10px;
`;

const NowPage = styled.span`
    margin:10px;
`;

const NextBtn = styled.button`
    margin:10px;
`;

const PostingBtn = styled.button`
    margin-left:90%;
`;

function CommunityPresenter({
    params,
    userDetail,
    show,
    setShow,
    set1,
    set2,
    set3,
    goPosting,
    allPost,
    setAll,
    showPosts,
    setPosts,
    pageMax,
    listNum,
    ifFirst,
    ifLast,
    goPrev,
    goNext,
}:{
    params:any,
    userDetail:any,
    show:Number,
    setShow:React.Dispatch<React.SetStateAction<Number>>,
    set1:() => void,
    set2:() => void,
    set3:() => void,
    goPosting:() => void,
    allPost: any,
    //setUsers: React.Dispatch<React.SetStateAction<null>>,
    setAll: React.Dispatch<React.SetStateAction<any[]>>,
    showPosts: any,
    //setUsers: React.Dispatch<React.SetStateAction<null>>,
    setPosts: React.Dispatch<React.SetStateAction<any[]>>,
    pageMax:number,
    listNum:number,
    ifFirst:()=>boolean,
    ifLast:()=>void,
    goPrev:() => void,
    goNext:() => void,
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
            <LiButton onClick={set3}>추천순</LiButton>
            </ButtonItem>
        </ButtonLi>
        <Contents>
            <h3>글 리스트</h3>
                <Table>
                    <thead>
                        <tr>
                        <Th1>No.</Th1>
                        <Th2>User</Th2>
                        <Th3>Title</Th3>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    showPosts.length>0 ?
                    showPosts.map((
                        data:
                        {
                        userId: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                        title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                        id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                        }) => (
                        <BodyTr>
                        <Td1>{data.id}</Td1>
                        <Td2>{data.userId}</Td2>
                        <Td3><GoDetail href={`/communitydetail/${params.team}/${data.id}`}>{data.title}</GoDetail></Td3>
                        </BodyTr>
                    ))
                    :
                    <Loading/>
                    }
                    </tbody>
                </Table>
                <Paging>
                {ifFirst() ? <></>:<PrevBtn onClick={goPrev}>previous</PrevBtn>}
                <NowPage>{listNum+1}</NowPage>
                {listNum===pageMax ? <></>: <NextBtn onClick={goNext}>next</NextBtn>}
                <div>{listNum+1}페이지 / {pageMax+1}페이지</div>
                </Paging>
            <PostingBtn onClick={goPosting}>posting</PostingBtn>
        </Contents>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default CommunityPresenter;