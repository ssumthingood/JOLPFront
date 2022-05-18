import Footer from "components/Footer";
import GetLogo from "components/GetLogo";
import GetTeamname from "components/GetTeamname";
import GetTeamnameEng from "components/GetTeamnameEng";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import React from "react";
import styled from "styled-components";
import {ReactTinyLink} from 'react-tiny-link';

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

function MyteamPresenter({
    user,
    userDetail,
    teamInfo,
    career
}:{
    user:any,
    userDetail:any,
    teamInfo:any,
    career:any,
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <HeadLine1>Myteam</HeadLine1>
        <HeadLine1>{GetTeamname(userDetail?.myteam.toString())}</HeadLine1>
        <img src = {GetLogo(GetTeamnameEng(userDetail?.myteam.toString()))} height='200px'/>
        <Section>
            <h3>공식 홈페이지</h3>
            {teamInfo.homepage ? 
            <ReactTinyLink
            cardSize='large'
            header={GetTeamname(userDetail?.myteam.toString())}
            showGraphic={false}
            maxLine={3}
            minLine={1}
            url={teamInfo.homepage.toString()}
            />:<a href={teamInfo.homepage} target='_blank'>홈페이지 바로가기</a>}
        </Section>      
        
        <Section>
            <h3>공식 스토어</h3>
            {teamInfo.store ? 
            <ReactTinyLink
            cardSize='large'
            header={GetTeamname(userDetail?.myteam.toString())}
            showGraphic={false}
            maxLine={3}
            minLine={1}
            url={teamInfo.store.toString()}
            />:<a href={teamInfo.store} target='_blank'>공식몰 바로가기</a>}
        </Section>
        
        <Section>
            <h3>공식 유튜브</h3>
            <a href={teamInfo.youtube} target='_blank'>유튜브 바로가기</a>
        </Section>
        {/* {teamInfo.youtube ? 
        <ReactTinyLink
        cardSize='small'
        showGraphic={true}
        maxLine={1}
        minLine={2}
        url={teamInfo.youtbe} />:<></>} */}
        <Section>역사</Section>
        PL 우승 : {career.PL} 회 <br/>{career.PL === 0 ? '':'('+career.PL_YEAR+')'}<br/>
        UCL 우승 : {career.UCL} 회 <br/>{career.UCL === 0 ? '':'('+career.UCL_YEAR+')'}<br/>
        UEL 우승 : {career.UEL} 회 <br/>{career.UEL === 0 ? '':'('+career.UEL_YEAR+')'}<br/>
        FA컴 우승 : {career.FA} 회 <br/>{career.FA === 0 ? '':'('+career.FA_YEAR+')'}<br/>
        리그 컵 우승 : {career.EFL} 회 <br/>{career.EFL === 0 ? '':'('+career.EFL_YEAR+')'}<br/>
        <Section>스쿼드</Section>

        </MainWrapper>
        <Footer />
        </>
    );
}

export default MyteamPresenter;