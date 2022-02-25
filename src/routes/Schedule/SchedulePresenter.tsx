import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import { Dispatch } from "react";
import styled from "styled-components";

const Bar  = styled.div`
    border-top:3px solid #81c147;
    border-bottom:3px solid #81c147;
    height:75px;
    line-height: 75px;
    font-size:18px;
    text-align:center;
`;

const LeftBtn = styled.button`
    border:none;
    width:200px;
    &:hover{
        cursor:pointer;
    }
`;

const RightBtn = styled.button`
    border:none;
    width:200px;
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
    date:Date,
    setDate:React.Dispatch<React.SetStateAction<Date>>,
    goPrevious:() => void,
    goNext:() => void,
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <h1>Schedule</h1>
        <Bar>
            <LeftBtn onClick={goPrevious}>Previous</LeftBtn>
            <Day>{date.toString()}</Day>
            <RightBtn onClick={goNext}>Next</RightBtn>
        </Bar>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default SchedulePresenter;