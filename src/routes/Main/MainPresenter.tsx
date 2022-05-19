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
    width:300px;
    max-height:300px;
    overflow-y:scroll;
    overflow-x:scroll;
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
    width:75px;
`;

const MyLink = styled.a`
    color:black;
    margin-top:50%;
    width:10%;
`;

const MyTeamsec = styled.div`
    padding:15px;
`;

const MatchList = styled.div`
    width:30%;
    height:300px;
    text-align:center;
    overflow-x:scroll;
    overflow-y:scroll;
`;

const ComuList = styled.div`
    width:40%;
    height:300px;
    font-size:14px;
`;

const ComuDetail = styled.a`
    color:black;
    line-height:20px;
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
            <MyTeamsec>
            <h3>{GetTeamname(userDetail?.myteam.toString())}</h3>
            <img src = {GetLogo(GetTeamnameEng(userDetail?.myteam.toString()))} height='250px'/>
            </MyTeamsec>
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