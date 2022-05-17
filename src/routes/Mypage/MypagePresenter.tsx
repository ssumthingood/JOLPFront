import Footer from "components/Footer";
import Header from "components/Header";
import Loading from "components/Loading";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import styled from "styled-components";
import Teamcode from "components/Teamcode";
import React from "react";

const HeadLine1 = styled.h1`
    font-size:25px;
    margin:0;
    padding:15px;
    width:100%;
`;

const Section = styled.div`
    width:100%;
    padding:10px;
`;

const Select = styled.select`
    width: 100px;
    border: 1px solid #999;
    font-family: inherit;
`;

const Option = styled.option`
    width: 100px;
    border: 1px solid #999;
    font-family: inherit;
`;

const GoDetail = styled.a`
    &:hover{
        background-color:whitesmoke;
    }
    width:100%;
`;

function MypagePresenter({
    user,
    userDetail,
    nick,
    setNick,
    nickChange,
    myPost,
    submit,
    myTeam,
    setMyTeam,
    teamChange,
    modifyPost,
    deletePost,
    signOut,
}:{
    user:any,
    userDetail:any,
    nick:string,
    setNick:React.Dispatch<React.SetStateAction<string>>,
    nickChange:(e: any) => void,
    myPost:any,
    submit:() => void,
    myTeam:string,
    setMyTeam:React.Dispatch<React.SetStateAction<string>>,
    teamChange:(e: any) => void,
    modifyPost:any,
    deletePost:any;
    signOut:any;
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <HeadLine1>MyPage</HeadLine1>
        {userDetail ?
        <>
        <Section>
        <h4>유저 ID</h4>
        {userDetail.loginid}
        </Section>
        <Section>
        <h4>닉네임</h4>
        {user.nickname}<br />
        <input type="text" onChange={nickChange}/>
        </Section>
        <Section>  
        <h4>내 팀</h4>
        {Teamcode(userDetail.myteam)}<br />
        <Select name="team" onChange={teamChange}>
        <Option value="0">선택</Option>
            <Option value="120">아스날</Option>
            <Option value="121">아스톤 빌라</Option>
            <Option value="131">번리</Option>
            <Option value="130">브라이튼</Option>
            <Option value="129">브렌트포드</Option>
            <Option value="134">첼시</Option>
            <Option value="136">크리스탈 팰리스</Option>
            <Option value="138">에버튼</Option>
            <Option value="145">리버풀</Option>
            <Option value="144">레스터</Option>
            <Option value="143">리즈</Option>
            <Option value="147">맨유</Option>
            <Option value="146">맨시티</Option>
            <Option value="150">노리치</Option>
            <Option value="149">뉴캐슬</Option>
            <Option value="158">사우스햄튼</Option>
            <Option value="163">토트넘 핫스퍼</Option>
            <Option value="166">웨스트햄</Option>
            <Option value="171">울버햄튼</Option>
            <Option value="164">왓포드</Option>
        </Select>
        </Section>
        <Section>
        <h4>작성한 글</h4>
        {
        myPost.length>0 ?
        myPost.map((
            data:
            {
                title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                board_id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
            }
        )=>(
            <>
            <GoDetail href={`/communitydetail/${userDetail.myteam}/${data.board_id}`}>{data.title}</GoDetail>
            <button onClick={(e)=>{modifyPost(data.board_id?.toString(), e)}}>수정</button>
            <button onClick={(e)=>{deletePost(data.board_id?.toString(), e)}}>삭제</button>
            <br />
            </>
        ))
        :
        <Loading/>}
        </Section>
        </>
        :
        <Loading/>
        }
        <Section>
            정보 변경은 30일마다 가능합니다.<br />
            닉네임은 공백 없이 설정합니다.
        </Section>
        <button onClick={submit}>정보 변경</button>
        <button onClick={signOut}>회원 탈퇴</button>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MypagePresenter;