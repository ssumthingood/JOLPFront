import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import styled from "styled-components";

function PostingPresenter({
    title,
    setTitle,
    titleChange,
    content,
    setContent,
    contentChange,
    anony,
    setAnony,
    anonyChange,
    submit,
}:{
    title:string,
    setTitle:React.Dispatch<React.SetStateAction<string>>,
    titleChange:(e: any) => void,
    content:string,
    setContent:React.Dispatch<React.SetStateAction<string>>,
    contentChange:(e: any) => void,
    anony:boolean,
    setAnony:React.Dispatch<React.SetStateAction<boolean>>,
    anonyChange:(e: any) => void,
    submit:() => void
}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        Posting
        <div>
            글 작성<br />
            title
            <input type="text" onChange={titleChange}/>
            <br />
            content
            <input type="text" onChange={contentChange}/>
            <br />
            익명<input type="checkbox" onChange={anonyChange} />
            <button onClick={submit}>submit</button>
        </div>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default PostingPresenter;