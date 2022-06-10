import styled from "styled-components";
import Footer from "components/Footer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import MainWrapper from "components/MainWrapper";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import Loading from "components/Loading";
import React from "react";

const HeadLine1 = styled.h1`
    font-size: 25px;
    margin: 0;
    padding: 15px;
    width: 100%;
`;

const ButtonLi = styled.ul`
    width: 100%;
    display: flex;
    list-style: none;
    padding: 10px;
`;

const ButtonItem = styled.li`
    margin: 2.5px;
`;

const Seperate = styled.p`
    margin: 2.5px;
    font-size: 18px;
`;

const LiButton = styled.button`
    border: none;
    background-color: black;
    color: #6aebcf;
    &:hover {
        cursor: pointer;
        background-color: gray;
    }
`;

const Contents = styled.div`
    width: 100%;
    padding: 15px;
`;

const Table = styled.table`
    width: 100%;
    text-align: left;
`;

const Th1 = styled.th`
    width: 10%;
    padding: 10px;
`;

// const Th2 = styled.th`
//     width:10%;
//     padding:10px;
// `;

const Th3 = styled.th`
    width: 63%;
    padding: 10px;
`;

const Th4 = styled.th`
    width: 13%;
    padding: 10px;
`;

const Th5 = styled.th`
    width: 13%;
    padding: 10px;
`;

const BodyTr = styled.tr``;

const Td1 = styled.td`
    width: 10%;
    padding: 3px 10px;
    border-bottom: 2px solid whitesmoke;
    border-right: 2px solid whitesmoke;
`;

// const Td2 = styled.td`
//     width:10%;
//     padding:3px 10px;
//     border-bottom: 2px solid whitesmoke;
//     border-right:2px solid whitesmoke;
// `;

const Td3 = styled.td`
    width: 63%;
    padding: 3px 10px;
    border-bottom: 2px solid whitesmoke;
    border-right: 2px solid whitesmoke;
`;

const Td4 = styled.td`
    width: 13%;
    padding: 3px 10px;
    border-bottom: 2px solid whitesmoke;
    border-right: 2px solid whitesmoke;
`;

const Td5 = styled.td`
    width: 13%;
    padding: 3px 10px;
    border-bottom: 2px solid whitesmoke;
    border-right: 2px solid whitesmoke;
`;
const GoDetail = styled.a`
    &:hover {
        background-color: whitesmoke;
    }
    display: block;
    width: 100%;
    height: 100%;
`;

const Paging = styled.div`
    width: 100%;
    padding: 5px;
    text-align: center;
`;

const PrevBtn = styled.button`
    margin: 10px;
`;

const NowPage = styled.span`
    margin: 10px;
`;

const NextBtn = styled.button`
    margin: 10px;
`;

const PostingBtn = styled.button`
    margin-left: 90%;
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
    //listNum,
    maxPageNumber,
    nowShow,
    ifFirst,
    ifLast,
    goPrev,
    goNext,
}: {
    params: any;
    userDetail: any;
    show: Number;
    setShow: React.Dispatch<React.SetStateAction<number>>;
    set1: () => void;
    set2: () => void;
    set3: () => void;
    goPosting: () => void;
    //listNum:number,
    maxPageNumber: number;
    nowShow: any;
    ifFirst: () => boolean;
    ifLast: () => boolean;
    goPrev: () => void;
    goNext: () => void;
}) {
    return (
        <>
            <Header />
            <NavBar />
            <MainWrapper>
                <HeadLine1>FAN TALK</HeadLine1>
                {/* <ButtonLi>
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
        </ButtonLi> */}
                <Contents>
                    <h3>글 리스트</h3>
                    <Table>
                        <thead>
                            <tr>
                                <Th1>No.</Th1>
                                {/* <Th2>User</Th2> */}
                                <Th3>Title</Th3>
                                <Th4>Read</Th4>
                                {/* <Th5>Likes</Th5> */}
                            </tr>
                        </thead>
                        <tbody>
                            {nowShow.length > 0 ? (
                                nowShow.map(
                                    (data: {
                                        categoryid: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                                        title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                                        board_id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                                        readcount: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                                        likes: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                                    }) => (
                                        <BodyTr>
                                            <Td1>{data.board_id}</Td1>
                                            {/* <Td2>{data.categoryid}</Td2> */}
                                            <Td3>
                                                <GoDetail href={`/communitydetail/${params.team}/${data.board_id}`}>{data.title}</GoDetail>
                                            </Td3>
                                            <Td4>{data.readcount}</Td4>
                                            {/* <Td5>{data.likes}</Td5> */}
                                        </BodyTr>
                                    ),
                                )
                            ) : (
                                <Loading />
                            )}
                        </tbody>
                    </Table>
                    <Paging>
                        {ifFirst() ? <></> : <PrevBtn onClick={goPrev}>previous</PrevBtn>}
                        <NowPage>{params.pagenum}</NowPage>
                        {ifLast() ? <NextBtn onClick={goNext}>next</NextBtn> : <></>}
                        <div>
                            {params.pagenum}페이지 /{maxPageNumber}페이지
                        </div>
                    </Paging>
                    <PostingBtn onClick={goPosting}>posting</PostingBtn>
                </Contents>
            </MainWrapper>
            <Footer />
        </>
    );
}

export default CommunityPresenter;
