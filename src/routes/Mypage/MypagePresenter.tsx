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

function MypagePresenter({

}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <HeadLine1>MyPage</HeadLine1>
        <Section>
        내 팀
        </Section>
        <Section>
        작성한 글
        </Section>
        <Section>
        정보 수정
        </Section>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MypagePresenter;