import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import styled from "styled-components";

function MyteamPresenter({

}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <div>Myteam</div>
        <div>공식홈</div>
        <div>공식몰</div>
        <div>공식 유튜브</div>
        <div>역사</div>
        <div>스쿼드</div>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MyteamPresenter;