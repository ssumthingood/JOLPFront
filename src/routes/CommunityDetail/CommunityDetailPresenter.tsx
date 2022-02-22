import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavBar from 'components/NavBar';
import styled from 'styled-components';
import MainWrapper from 'components/MainWrapper';

function CommunityDetailPresenter({

}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        CommunityDetail
        제목
        작성자
        내용
        </MainWrapper>
        <Footer />
        </>
    );
}

export default CommunityDetailPresenter;