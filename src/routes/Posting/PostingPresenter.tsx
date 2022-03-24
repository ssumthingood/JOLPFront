import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; 
import styled from "styled-components";
import './PostingPresenter.css';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

const HeadLine1 = styled.h1`
    font-size:25px;
    margin:0;
    padding:15px;
    width:100%;
`;

const Postingdiv = styled.div`
    width:100%;
    padding:15px;
`;

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
        <HeadLine1>Posting</HeadLine1>
        <Postingdiv>
            title
            <input type="text" onChange={titleChange}/>
            <br />
            content
            <CKEditor
                editor={ ClassicEditor }
                // config={ {
                //     plugins: [ Paragraph, Bold, Italic, Essentials ],
                //     toolbar: [ 'bold', 'italic' ]
                // } }
                data=""
                onReady={ (editor: any) => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event: any, editor: { getData: () => any; } ) => {
                    const data = editor.getData();
                    // console.log( { event, editor, data } );
                    setContent(data);
                    console.log(content);
                } }
                 onBlur={ ( event: any, editor: any ) => {
                    // console.log( 'Blur.', editor );
                } }
                onFocus={ ( event: any, editor: any ) => {
                    // console.log( 'Focus.', editor );
                } }
            />
            <br />
            익명<input type="checkbox" onChange={anonyChange} /><br />
            <button onClick={submit}>submit</button>
        </Postingdiv>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default PostingPresenter;