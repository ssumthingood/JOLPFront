import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import { Dispatch } from "react";
import styled from "styled-components";

function SchedulePresenter({
    date,
    setDate,
}:{
    date:Date,
    setDate:React.Dispatch<React.SetStateAction<Date>>}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        Schedule
        <div>
            일정
            X월 X일
        </div>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default SchedulePresenter;