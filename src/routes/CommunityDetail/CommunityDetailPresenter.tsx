import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "components/NavBar";
import styled from "styled-components";
import MainWrapper from "components/MainWrapper";
import Loading from "components/Loading";
import Parser from "html-react-parser"; //1. import 삽입
import React from "react";

const HeadLine1 = styled.h1`
    font-size: 25px;
    margin: 0;
    padding: 15px;
    width: 100%;
`;

const UserName = styled.div`
    width: 100%;
    font-size: 15px;
    color: gray;
    padding-left: 50px;
`;

const Seperate = styled.p`
    margin: 5px;
    font-size: 15px;
    display: inline-block;
`;

const UserContent = styled.div`
    padding: 25px;
    font-size: 18px;
`;

const Below = styled.div`
    padding: 25px;
    width: 100%;
    text-align: right;
`;

const MyButton = styled.button`
    margin: 5px;
`;

function CommunityDetailPresenter({
    auth,
    user,
    userDetail,
    post,
    modifyPost,
    deletePost,
    goCommunity,
}: {
    auth: () => boolean;
    user: any;
    userDetail: any;
    post: any;
    modifyPost: any;
    deletePost: any;
    goCommunity: () => void;
}) {
    return (
        <>
            {auth() ? (
                <>
                    <Header />
                    <NavBar />
                    <MainWrapper>
                        <h3>FAN TALK</h3>
                        {post ? (
                            <>
                                <HeadLine1>{post.title}</HeadLine1>
                                <UserName>
                                    작성자 <Seperate>|</Seperate> {post.isanony === 1 ? "익명" : post.nickname}
                                    <Seperate>&nbsp;&nbsp;&nbsp;&nbsp;</Seperate>
                                    조회수 <Seperate>|</Seperate> {post.readcount}
                                    <Seperate>&nbsp;&nbsp;&nbsp;&nbsp;</Seperate>
                                    {/* 추천수 <Seperate>|</Seperate> {post.likes}<Seperate>&nbsp;&nbsp;&nbsp;&nbsp;</Seperate> */}
                                </UserName>
                                <UserContent>{Parser(post.content)}</UserContent>
                            </>
                        ) : (
                            <Loading />
                        )}
                        <Below>
                            {userDetail?.user_id === post?.user_id ? (
                                <MyButton
                                    onClick={(e) => {
                                        modifyPost(post.board_id.toString(), e);
                                    }}
                                >
                                    수정
                                </MyButton>
                            ) : (
                                <></>
                            )}
                            {userDetail?.user_id === post?.user_id ? (
                                <MyButton
                                    onClick={(e) => {
                                        deletePost(post.board_id.toString(), e);
                                    }}
                                >
                                    삭제
                                </MyButton>
                            ) : (
                                <></>
                            )}
                            <MyButton onClick={goCommunity}>목록으로</MyButton>
                        </Below>
                    </MainWrapper>
                    <Footer />
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default CommunityDetailPresenter;
