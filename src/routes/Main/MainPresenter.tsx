import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NavBar from 'components/NavBar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import MainWrapper from 'components/MainWrapper';

const MyCalendar  = styled(Calendar)`
    max-width:300px;
    max-height:300px;
    overflow:hidden;
    `;

const Section = styled.div`
    min-width:50%;
    min-height:300px;
    padding:2.5%;
`;

const MyLink = styled.a`

`;

function MainPresenter({
    onDatechange,
    comu
}:{
    onDatechange:(e:Date)=>void,
    comu:any,
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <Section>
            내 팀
            <div></div>
            <MyLink href={`/myteam/${window.localStorage.ID}`}>more</MyLink>
        </Section>
        <Section>
            일정
            <MyCalendar onChange = {onDatechange}   />
            <div></div>
            <MyLink href={`/schedule/${window.localStorage.ID}`} >more</MyLink>
        </Section>
        <Section>
            영상
            <div></div>
            <MyLink href={`/video/${window.localStorage.ID}`}>more</MyLink>
        </Section>
        <Section>
            뉴스
            <div></div>
            <MyLink href={`/news/${window.localStorage.ID}`}>more</MyLink>
        </Section>
        <Section>
            커뮤니티
            <div>
                {comu.map((
                    data:
                    {
                    title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                    id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; 
                    }
                )=>(
                    <>
                    <a href={`/communitydetail/${window.localStorage.ID}/${data.id}`}>{data.title}</a><br />
                    </>
                ))}
            </div>
            <MyLink href={`/community/${window.localStorage.ID}`}>more</MyLink>
        </Section>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MainPresenter;