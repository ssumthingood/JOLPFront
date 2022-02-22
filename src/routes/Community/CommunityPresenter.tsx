import styled from "styled-components"
import Footer from "components/Footer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import MainWrapper from "components/MainWrapper";

const ButtonLi = styled.ul`
    display:flex;
    list-style:none;
`;

const ButtonItem = styled.li`
    margin: 2.5px;
`;

const Seperate = styled.p`
    margin: 2.5px;
    font-size: 18px;
`;

const LiButton = styled.button`
    border:none;
    background-color:whitesmoke;
    &:hover{    
        cursor:pointer;
        background-color:gray;
    }
`;

function CommunityPresenter({
    show,
    setShow,
    set1,
    set2,
    set3,
    goPosting
}:{
    show:Number,
    setShow:React.Dispatch<React.SetStateAction<Number>>,
    set1:() => void,
    set2:() => void,
    set3:() => void,
    goPosting:() => void
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        Community
        <ButtonLi>
            <ButtonItem>
            <LiButton onClick={set1}>최신순</LiButton>
            </ButtonItem>
            <Seperate>|</Seperate>
            <ButtonItem>
            <LiButton onClick={set2}>조회순</LiButton>
            </ButtonItem>
            <Seperate>|</Seperate>
            <ButtonItem>
            <LiButton onClick={set3}>좋아요 많은 순</LiButton>
            </ButtonItem>
        </ButtonLi>
        <div>
            글 리스트
        </div>
        <button onClick={goPosting}>posting</button>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default CommunityPresenter;