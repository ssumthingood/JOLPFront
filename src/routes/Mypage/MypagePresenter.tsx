import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import { ReactChild, ReactFragment, ReactPortal } from "react";
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
    myState,
}:{myState:any,
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <HeadLine1>MyPage</HeadLine1>
        {myState ?
        <>
        <Section>
        <h4>유저 ID</h4>
        {myState.name}
        </Section>
        <Section>
        <h4>닉네임</h4>
        {myState.username}
        </Section>
        <Section>
        <h4>내 팀</h4>
        {myState.website}
        </Section>
        <Section>
        <h4>작성한 글</h4>
        {myState.phone}
        </Section>
        </>
        :
        <></>
        }
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MypagePresenter;