import styled from "styled-components";
import Footer from "components/Footer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import MainWrapper from "components/MainWrapper";
import React, { ReactChild, ReactFragment, ReactPortal } from "react";
import GetLogo from "components/GetLogo";
import GetTeamnameEng from "components/GetTeamnameEng";

const HeadLine1 = styled.h1`
    font-size: 25px;
    margin: 0;
    padding: 15px;
    width: 100%;
`;
const Prediction = styled.div`
    width: 100%;
    display: flex;
    font-size: 30px;
    line-height: 50px;
    gap: 30px;
    item-align: center;
    padding-top: 30px;
    text-align: center;
    justify-content: center;
    border-bottom: 5px solid lightgray;
`;

const VS = styled.div`
    font-weight: bold;
    padding-top: 50px;
`;

const MatchContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 25px;
    padding-bottom: 0px;
    border-bottom: 3px solid whitesmoke;
`;

const TeamLogo1 = styled.img`
    margin: 0px 250px;
`;

const TeamLogo2 = styled.img`
    margin: 0px 250px;
`;

const TeamName = styled.div`
    position: relative;
    top: -100px;
    font-size: 30px;
`;

const Bar = styled.div`
    border-top: 3px solid #81c147;
    border-bottom: 3px solid #81c147;
    width: 100%;
    height: 75px;
    line-height: 75px;
    font-size: 18px;
    text-align: center;
`;

function NewsPresenter({ prediction, past }: { prediction: any; past: any[] }) {
    return (
        <>
            <Header />
            <NavBar />
            <MainWrapper>
                <HeadLine1>Prediction</HeadLine1>
                <h1>{GetTeamnameEng(prediction?.team_id.toString())}의 다음 경기 결과 예측(기대 득점)</h1>
                <Prediction>
                    {prediction ? (
                        <>
                            <div>
                                <img src={GetLogo(prediction?.hometeam.toString())} height="150px" />
                                <br />
                                {prediction?.hometeam}
                                <br />
                                {prediction?.fthg}
                            </div>
                            <VS>vs</VS>
                            <div>
                                <img src={GetLogo(prediction?.awayteam.toString())} height="150px" />
                                <br />
                                {prediction?.awayteam}
                                <br />
                                {prediction?.ftag}
                            </div>
                        </>
                    ) : (
                        <>다음 경기가 없습니다.</>
                    )}
                </Prediction>
                <h1>상대 전적(최근 3시즌)</h1>
                {past ? (
                    past.map(
                        (matchdata: {
                            season: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                            hometeam: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                            awayteam: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                            date: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                            fthg: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                            ftag: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                        }) => (
                            <MatchContainer>
                                <h4>{matchdata.season}시즌</h4>
                                <br />
                                {matchdata.date?.toString().substring(0, 10)}
                                <br />
                                <TeamLogo1 src={GetLogo(matchdata.hometeam!.toString())} height="125px" />
                                <TeamLogo2 src={GetLogo(matchdata.awayteam!.toString())} height="125px" />
                                <br />
                                <TeamName>
                                    {matchdata.hometeam} vs {matchdata.awayteam}
                                    <br />
                                    {matchdata.fthg} : {matchdata.ftag}
                                </TeamName>
                            </MatchContainer>
                        ),
                    )
                ) : (
                    <>
                        <MatchContainer>Match not Found</MatchContainer>
                    </>
                )}
                <Bar>경기 정보는 홈/어웨이 순입니다.</Bar>
            </MainWrapper>
            <Footer />
        </>
    );
}

export default NewsPresenter;
