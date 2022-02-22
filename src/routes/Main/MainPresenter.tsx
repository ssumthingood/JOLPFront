import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NavBar from 'components/NavBar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import MainWrapper from 'components/MainWrapper';

const MyCalendar  = styled(Calendar)`
    width:300px;
    height:300px;
`;

function MainPresenter({
    onDatechange
}:{onDatechange:(e:Date)=>void}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <div>
            내 팀
        </div>
        <div>
            일정
            <MyCalendar onChange = {onDatechange}   />
        </div>
        <div>
            영상
        </div>
        <div>
            뉴스
        </div>
        <div>
            커뮤니티
        </div>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MainPresenter;