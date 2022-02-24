import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import styled from "styled-components";

const Section = styled.div`
    
`;

function MyteamPresenter({

}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <Section>Myteam</Section>
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