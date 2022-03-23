import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
            <CKEditor
                    editor={ ClassicEditor }
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
            {/* <input type="text" onChange={contentChange}/> */}
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