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
    min-width:49%;
    min-height:300px;
    padding:2.5%;
    background-color:whitesmoke;
    border : 3px solid lightgray;
    margin:0.5%;
`;

const MyLink = styled.a`

`;

function MainPresenter({
    params,
    onDatechange,
    comu,
    matches,
    user,
    userDetail,
}:{
    params:any
    onDatechange:(e:Date)=>void,
    comu:any,
    matches:any,
    user:any,
    userDetail:any
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <Section>
            내 팀
            <div></div>
            <MyLink href={`/myteam`}>more</MyLink>
        </Section>
        <Section>
            일정
            <MyCalendar onChange = {onDatechange}   />
            <div></div>
            <MyLink href={`/schedule`} >more</MyLink>
        </Section>
        <Section>
            영상
            <div></div>
            <MyLink href={`/video`}>more</MyLink>
        </Section>
        <Section>
            뉴스
            <div></div>
            <MyLink href={userDetail ? `/news/${userDetail.myteam}/1`:`/main`}>more</MyLink>
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
                    <a href={`/communitydetail/${userDetail.myteam}/${data.id}`}>{data.title}</a><br />
                    </>
                ))}
            </div>
            <MyLink href={userDetail ? `/community/${userDetail.myteam}/1`:`/main`}>more</MyLink>
        </Section>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MainPresenter;