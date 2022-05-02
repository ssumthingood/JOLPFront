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
    min-height:400px;
    padding:2.5%;
    background-color:whitesmoke;
    border : 3px solid lightgray;
    margin:0.5%;
    display:flex;
`;

const SectionName = styled.div`
    font-size:20px;
`;

const MyLink = styled.a`

`;

const MatchList = styled.div`
    width:30%;
    text-align:center;
`;

const Match = styled.div`
    margin:10px 5px;
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
            <SectionName>내 팀</SectionName>
            <div></div>
            <MyLink href={`/myteam`}>more</MyLink>
        </Section>
        <Section>
            <SectionName>일정</SectionName>
            <MyCalendar onChange = {onDatechange} />
            <MatchList>
                {matches.length>0 ? <>{matches.map((
                    data:{
                        datetime: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                        awayteam: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                        ftag: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                        hometeam: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                        fthg: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                    }
                )=>(
                    <>
                    <Match>
                    {data.datetime?.toString().substring(0,10)}<br />
                    {data.hometeam} vs {data.awayteam}<br />
                    {data.fthg} : {data.ftag}<br />
                    </Match>
                    </>
                ))}</>:<>No Matches</>}
            </MatchList>
            <MyLink href={`/schedule`} >more</MyLink>
        </Section>
        <Section>
            <SectionName>뉴스</SectionName>
            <div></div>
            <MyLink href={userDetail ? `/news/${userDetail.myteam}/1`:`/main`}>more</MyLink>
        </Section>
        <Section>
            <SectionName>커뮤니티</SectionName>
            <div>
                {comu.map((
                    data:
                    {
                    title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                    board_id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; 
                    }
                )=>(
                    <>
                    <a href={`/communitydetail/${userDetail.myteam}/${data.board_id}`}>{data.title}</a><br />
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