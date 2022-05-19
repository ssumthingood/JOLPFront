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
    margin-bottom:25px;
`;

function MyteamPresenter({
    user,
    userDetail,
    teamInfo,
    career,
    squad
}:{
    user:any,
    userDetail:any,
    teamInfo:any,
    career:any,
    squad:string[],
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>

        <Section>
        <HeadLine1>Myteam</HeadLine1>
        <HeadLine1>{GetTeamname(userDetail?.myteam.toString())}</HeadLine1>
        <img src = {GetLogo(GetTeamnameEng(userDetail?.myteam.toString()))} height='200px'/>
        </Section>

        <Section>
            <h3>공식 홈페이지</h3>
            {teamInfo.homepage ? 
            <ReactTinyLink
            cardSize='large'
            header={GetTeamname(userDetail?.myteam.toString())+' 공식 홈페이지'}
            showGraphic={false}
            maxLine={3}
            minLine={1}
            url={teamInfo.homepage.toString()}
            description='Linked by HoomBa'
            />:<a href={teamInfo.homepage} target='_blank'>홈페이지 바로가기</a>}
        </Section>      
        
        <Section>
            <h3>공식 스토어</h3>
            {teamInfo.store ? 
            <ReactTinyLink
            cardSize='large'
            header={GetTeamname(userDetail?.myteam.toString())+' 공식 스토어'}
            showGraphic={false}
            maxLine={3}
            minLine={1}
            url={teamInfo.store.toString()}
            description='Linked by HoomBa'
            />:<a href={teamInfo.store} target='_blank'>공식몰 바로가기</a>}
        </Section>
        
        <Section>
            <h3>공식 유튜브</h3>
            {teamInfo.youtube ? 
            <ReactTinyLink
            cardSize='large'
            header={GetTeamname(userDetail?.myteam.toString())+' 공식 유튜브'}
            showGraphic={false}
            maxLine={3}
            minLine={1}
            url={teamInfo.youtube.toString()}
            description='Linked by HoomBa'
            />:<a href={teamInfo.youtube} target='_blank'>유튜브 바로가기</a>}
            {/* <a href={teamInfo.youtube} target='_blank'>유튜브 바로가기</a> */}
        </Section>

        <Section>
        <h3>역사</h3>
        PL 우승 : {career.PL} 회 <br/>{career.PL === 0 ? '':'('+career.PL_YEAR+')'}<br/>
        UCL 우승 : {career.UCL} 회 <br/>{career.UCL === 0 ? '':'('+career.UCL_YEAR+')'}<br/>
        UEL 우승 : {career.UEL} 회 <br/>{career.UEL === 0 ? '':'('+career.UEL_YEAR+')'}<br/>
        FA컴 우승 : {career.FA} 회 <br/>{career.FA === 0 ? '':'('+career.FA_YEAR+')'}<br/>
        리그 컵 우승 : {career.EFL} 회 <br/>{career.EFL === 0 ? '':'('+career.EFL_YEAR+')'}<br/>
        </Section>
 
        <Section>
        <h3>팀 스쿼드(21-22시즌)</h3>
        <div>
        {squad.map((
            squaddata:string
            )=>(
            <img src={squaddata} width='750px'/>
        ))}
        </div>
        </Section>

        </MainWrapper>
        <Footer />
        </>
    );
}

export default MyteamPresenter;