import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; 
import styled from "styled-components";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";
import React from "react";

const HeadLine1 = styled.h1`
    font-size:25px;
    margin:0;
    padding:15px;
    padding-bottom:0;
    width:100%;
`;

const HeadLine3 = styled.h3`
    font-size:18px;
    margin:0;
    padding:15px;
    width:100%;
`;

const Postingdiv = styled.div`
    width:100%;
    padding:15px;
`;

const Textinput = styled.input`
    width:100%;
    height:25px;
    line-height:25px;
    border: 1px solid lightgray;
`;

const Anony = styled.input`
    width:15px;
    height:15px;
    margin:5px;
    border: 3px solid lightgray;
`;

function ModifyPresenter({
    auth,
    user,
    userDetail,
    post,
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
    auth:()=>boolean,
    user:any,
    userDetail:any,
    post:any;
    title:string,
    setTitle:React.Dispatch<React.SetStateAction<string>>,
    titleChange:(e: any) => void,
    content:string,
    setContent:React.Dispatch<React.SetStateAction<string>>,
    contentChange:(e: any) => void,
    anony:string,
    setAnony:React.Dispatch<React.SetStateAction<string>>,
    anonyChange:(e: any) => void,
    submit:() => void
}){
    return (
        <>
        <Header/>
        <NavBar/>
        <MainWrapper>
        <HeadLine1>Modify</HeadLine1>
        <Postingdiv>
            <HeadLine3>제목</HeadLine3>
            <Textinput type="text" value={post!==null ? title:"loading"} onChange={titleChange}/>
            <br />
            <HeadLine3>내용</HeadLine3>
            <CKEditor
                editor={ ClassicEditor }
                data={post!==null ? post.content:"loading"}
                onReady={ (editor: any) => {
                    // You can store the "editor" and use when it is needed.
                } }
                onChange={ ( event: any, editor: { getData: () => any; } ) => {
                    const data = editor.getData();
                    setContent(data);
                } }
                 onBlur={ ( event: any, editor: any ) => {
                    // console.log( 'Blur.', editor );
                } }
                onFocus={ ( event: any, editor: any ) => {
                    // console.log( 'Focus.', editor );
                } }
            />

            <HeadLine3>익명<Anony type="checkbox" onChange={anonyChange} /></HeadLine3>
            <button onClick={submit}>modify</button>
        </Postingdiv>
        </MainWrapper>
        <Footer/>
        </>
    );
}

export default ModifyPresenter;