import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import { Dispatch } from "react";
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

function SchedulePresenter({
    date,
    setDate,
    goPrevious,
    goNext,
}:{
    date:string,
    setDate:React.Dispatch<React.SetStateAction<string>>,
    goPrevious:() => void,
    goNext:() => void,
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
        </MainWrapper>
        <Footer />
        </>
    );
}

export default SchedulePresenter;