import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import React from "react";
import styled from "styled-components";

function NewsDetailPresenter({

}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        NewsDetail
        <div>
            제목
            <div>title</div>
            내용
            <div>contents</div>
        </div>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default NewsDetailPresenter;