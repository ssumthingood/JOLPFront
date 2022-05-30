import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NavBar from 'components/NavBar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import MainWrapper from 'components/MainWrapper';
import GetTeamname from 'components/GetTeamname';
import GetLogo from 'components/GetLogo';
import GetTeamnameEng from 'components/GetTeamnameEng';

const MyCalendar  = styled(Calendar)`
    width:330px;
    max-height:330px;
    overflow-y:scroll;
    overflow-x:scroll;
    `;

const Section = styled.div`
    width:49%;
    min-height:400px;
    padding:2.5%;
    background-color:whitesmoke;
    border : 3px solid lightgray;
    overflow: scroll;
    margin:0.5%;
    display:flex;
`;

const SectionName = styled.div`
    font-size:18px;
    font-weight:bold;
    width:90px;
`;

const MyLink = styled.a`
    color:black;
    margin-top:50%;
    width:10%;
`;

const MyTeamsec1 = styled.div`
    padding:15px;
    padding-top:50px;
`;

const MyTeamsec2 = styled.div`
    padding:15px;
    width:50%;
    overflow-x:scroll;
    padding-top:50px;
`;

const Myh3 = styled.h3`
    text-align:center;
    font-size:20px;
    padding-top:15px;
`;

const Line = styled.p`
    font-size:20px;
    margin : 15px 0;
    padding-top:25px;
`;

const MatchList = styled.div`
    width:30%;
    height:300px;
    text-align:center;
    overflow-x:scroll;
    overflow-y:scroll;
`;

const ComuList = styled.div`
    width:80%;
    height:300px;
    font-size:15px;
    padding-top:50px;
`;

const ComuDetail = styled.a`
    color:black;
    line-height:20px;
    padding-bottom:10px;
`;


const Match = styled.div`
    margin:10px 0;
`;

function MainPresenter({
    params,
    onDatechange,
    comu,
    matches,
    user,
    userDetail,
    stad,
}:{
    params:any
    onDatechange:(e:Date)=>void,
    comu:any,
    matches:any,
    user:any,
    userDetail:any,
    stad:any,
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <Section>
            <SectionName>내 팀</SectionName>
            <MyTeamsec1>
            <img src = {GetLogo(GetTeamnameEng(userDetail?.myteam.toString()))} height='200px'/>
            <Myh3>{GetTeamname(userDetail?.myteam.toString())}</Myh3>
            </MyTeamsec1>
            <MyTeamsec2>
            <Line>연고지 : {stad?.region}</Line>
            <Line>구장 : {stad?.stadium}</Line>
            <Line>감독 : {stad?.manager}</Line>
            </MyTeamsec2>
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
            <SectionName>승부예측</SectionName>
            <div></div>
            <MyLink href={userDetail ? `/news/${userDetail.myteam}/1`:`/main`}>more</MyLink>
        </Section>
        <Section>
            <SectionName>커뮤니티</SectionName>
            <ComuList>
                {comu.map((
                    data:
                    {
                    title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                    board_id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; 
                    }
                )=>(
                    <>
                    <ComuDetail href={`/communitydetail/${userDetail.myteam}/${data.board_id}`}>{data.title}</ComuDetail><br />
                    </>
                ))}
            </ComuList>
            <MyLink href={userDetail ? `/community/${userDetail.myteam}/1`:`/main`}>more</MyLink>
        </Section>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MainPresenter;