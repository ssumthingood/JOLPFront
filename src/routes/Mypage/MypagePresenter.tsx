import Footer from "components/Footer";
import Header from "components/Header";
import Loading from "components/Loading";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import styled from "styled-components";

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

function MypagePresenter({
    user,
    userDetail,
    nick,
    setNick,
    nickChange,
    myState,
    submit,
    myTeam,
    setMyTeam,
    teamChange,
}:{
    user:any,
    userDetail:any,
    nick:string,
    setNick:React.Dispatch<React.SetStateAction<string>>,
    nickChange:(e: any) => void,
    myState:any,
    submit:() => void,
    myTeam:string,
    setMyTeam:React.Dispatch<React.SetStateAction<string>>,
    teamChange:(e: any) => void,
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <HeadLine1>MyPage</HeadLine1>
        {myState ?
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
        {userDetail.myteam}<br />
        <Select name="team" onChange={teamChange}>
        <Option value="0">선택</Option>
            <Option value="1">아스날</Option>
            <Option value="2">아스톤 빌라</Option>
            <Option value="3">번리</Option>
            <Option value="4">브라이튼</Option>
            <Option value="5">브렌트포드</Option>
            <Option value="6">첼시</Option>
            <Option value="7">크리스탈 팰리스</Option>
            <Option value="8">에버튼</Option>
            <Option value="9">리버풀</Option>
            <Option value="10">레스터</Option>
            <Option value="11">리즈</Option>
            <Option value="12">맨유</Option>
            <Option value="13">맨시티</Option>
            <Option value="14">노리치</Option>
            <Option value="15">뉴캐슬</Option>
            <Option value="16">사우스햄튼</Option>
            <Option value="17">토트넘 핫스퍼</Option>
            <Option value="18">웨스트햄</Option>
            <Option value="19">울버햄튼</Option>
            <Option value="20">왓포드</Option>
        </Select>
        </Section>
        <Section>
        <h4>작성한 글</h4>
        {myState.phone}
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
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MypagePresenter;