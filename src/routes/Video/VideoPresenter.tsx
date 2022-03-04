import styled from "styled-components"
import Footer from "components/Footer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import MainWrapper from "components/MainWrapper";

const HeadLine1 = styled.h1`
    font-size:25px;
    margin:0;
    padding:15px;
    width:100%;
`;

const ButtonLi = styled.ul`
    width:100%;
    display:flex;
    list-style:none;
    padding:10px;
`;

const ButtonItem = styled.li`
    margin: 2.5px;
`;

const Seperate = styled.p`
    margin: 2.5px;
    font-size: 18px;
`;

const LiButton = styled.button`
    background-color:black;
    color:#6aebcf;
    border:none;
    &:hover{    
        cursor:pointer;
        background-color:gray;
    }
`;
function VideoPresenter({
    show,
    setShow,
    set1,
    set2,
    set3,
}:{
    show:Number,
    setShow:React.Dispatch<React.SetStateAction<Number>>,
    set1:() => void,
    set2:() => void,
    set3:() => void
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        <HeadLine1>Video</HeadLine1>
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
                <LiButton onClick={set3}>추천순</LiButton>
                </ButtonItem>        
            </ButtonLi>
            <div>
                <h3>영상 리스트</h3>
            </div>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default VideoPresenter;