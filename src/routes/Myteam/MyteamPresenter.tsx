import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import styled from "styled-components";

const HeadLine1 = styled.h1`
    font-size:25px;
    margin:0;
    padding:15px;
    width:100%;
`;

const Section = styled.div`
    width:100%;
    padding:10px;
`;

function MyteamPresenter({

}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <HeadLine1>Myteam</HeadLine1>
        <Section>공식홈</Section>
        <Section>공식몰</Section>
        <Section>공식 유튜브</Section>
        <Section>역사</Section>
        <Section>스쿼드</Section>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MyteamPresenter;