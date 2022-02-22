import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import styled from "styled-components";

function MypagePresenter({

}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <div>
        내 정보
        </div>
        <div>
        내 팀
        </div>
        <div>
        작성한 글
        </div>
        <div>
        정보 수정
        </div>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default MypagePresenter;