import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; 
import styled from "styled-components";
import './PostingPresenter.css';
import Uploader from "./PlugIn";
//import './UploadAdapter';
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";
import React from "react";
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

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

function PostingPresenter({
    auth,
    user,
    userDetail,
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
        <HeadLine1>Posting</HeadLine1>
        <Postingdiv>
            <HeadLine3>제목</HeadLine3>
            <Textinput type="text" onChange={titleChange}/>
            <br />
            <HeadLine3>내용</HeadLine3>

            <CKEditor
                // editor={ ClassicEditor.create((document.getElementsByClassName('ck ck-reset ck-editor ck-rounded-corners')), {
                //         ckfinder: {
                //             uploadUrl: '13.125.107.215:3003/apis/aws/imageUpload"'
                //         }
                //     } )}

                editor={ ClassicEditor }

                data=""
                onReady={ (editor: any) => {
                    // You can store the "editor" and use when it is needed.
                } }
                onChange={ ( event: any, editor: { getData: () => any; } ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                    setContent(data);
                } }
                 onBlur={ ( event: any, editor: any ) => {
                    // console.log( 'Blur.', editor );
                } }
                onFocus={ ( event: any, editor: any ) => {
                    // console.log( 'Focus.', editor );
                } }
                // config={{
                //     plugins:[
                //         Uploader,
                //         SimpleUploadAdapter,
                //     ],


                //     image: {
                //         resizeUnit: "px",
                //         toolbar: [
                //           "imageStyle:alignLeft",
                //           "imageStyle:full",
                //           "imageStyle:alignRight",
                //           "|",
                //           "imageTextAlternative",
                //         ],
                //         styles: ["full", "alignLeft", "alignRight"],
                //         type: ["JPEG", "JPG", "GIF", "PNG"],
                //       },

                //       simpleUpload: {
                //         uploadUrl: "13.125.107.215:3003/apis/aws/imageUpload",
                //         withCredentials: true,
                //       },
                // }}
            />

            {/* {ClassicEditor.create(document.querySelector('#editor'),{
                    plugins : [SimpleUploadAdapter],
                        simpleUpload: {
                        uploadUrl: "13.125.107.215:3003/apis/aws/imageUpload",
                        withCredentials: true,
                      },
                })
            } */}

            <HeadLine3>익명<Anony type="checkbox" onChange={anonyChange} /></HeadLine3>
            <button onClick={submit}>submit</button>
        </Postingdiv>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default PostingPresenter;