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
    nick,
    setNick,
    nickChange,
    myState,
    submit,
    myTeam,
    setMyTeam,
    teamChange,
}:{
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
        {myState.name}
        </Section>
        <Section>
        <h4>닉네임</h4>
        {myState.username}<br />
        <input type="text" onChange={nickChange}/>
        <button onClick={submit}>change</button>
        </Section>
        <Section>
        <h4>내 팀</h4>
        {myState.website}<br />
        <Select name="team" onChange={teamChange}>
            <Option value="0">선택</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
            <Option value="13">13</Option>
            <Option value="14">14</Option>
            <Option value="15">15</Option>
            <Option value="16">16</Option>
            <Option value="17">17</Option>
            <Option value="18">18</Option>
            <Option value="19">19</Option>
            <Option value="20">20</Option>
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
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MypagePresenter;