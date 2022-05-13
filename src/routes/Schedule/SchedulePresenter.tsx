import Footer from "components/Footer";
import Header from "components/Header";
import Loading from "components/Loading";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import React from "react";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import styled from "styled-components";

const HeadLine1 = styled.h1`
    font-size:25px;
    margin:0;
    padding:15px;
    width:100%;
`;

const Bar  = styled.div`
    border-top:3px solid #81c147;
    border-bottom:3px solid #81c147;
    width:100%;
    height:75px;
    line-height: 75px;
    font-size:18px;
    text-align:center;
`;

const LeftBtn = styled.button`
    border:none;
    width:100px;
    &:hover{
        cursor:pointer;
    }
`;

const RightBtn = styled.button`
    border:none;
    width:100px;
    &:hover{
        cursor:pointer;
    }
`;

const Day = styled.span`
    margin: 0 20%;
`;

const MatchContainer = styled.div`
    width:100%;
    text-align:center;
    padding:25px;
    border-bottom: 3px solid whitesmoke;
`;

function SchedulePresenter({
    date,
    matches,
    setDate,
    goPrevious,
    goNext,
    getLogo,
}:{
    date:string,
    matches:any,
    setDate:React.Dispatch<React.SetStateAction<string>>,
    goPrevious:() => void,
    goNext:() => void,
    getLogo:(code: string)=>string,
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <HeadLine1>Schedule</HeadLine1>
        <Bar>
            <LeftBtn onClick={goPrevious}>Previous</LeftBtn>
            <Day>{date}</Day>
            <RightBtn onClick={goNext}>Next</RightBtn>
        </Bar>
        {
        matches.length>0 ?
        matches.map((
            matchdata:
            {
                season: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                hometeam: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                awayteam: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                datetime: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                fthg: boolean | ReactChild | ReactFragment | ReactPortal | null |undefined;
                ftag: boolean | ReactChild | ReactFragment | ReactPortal | null |undefined;
            })=>(
                <MatchContainer>
                    <h4>{matchdata.season}시즌</h4><br/>
                    {matchdata.datetime?.toString().substring(0,10)}<br/>
                    <></>{matchdata.hometeam} vs {matchdata.awayteam}<></><br />
                    {matchdata.fthg} : {matchdata.ftag}
                </MatchContainer>
            )):
            <>
            <MatchContainer>Match not Found</MatchContainer>
            </>
            }
        <Bar>경기 정보는 홈/어웨이 순입니다.</Bar>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default SchedulePresenter;