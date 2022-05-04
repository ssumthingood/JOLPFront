import StartWrapper from 'components/StartWrapper';
import React from 'react';
import styled from 'styled-components';

const Btn1 = styled.button`
    background-color:#81c147;
    color:white;
    border:none;
    margin:0;
    padding:15px;
    &:hover{
        cursor:pointer;
    }
`;

function StartPresenter({
    auth,
    goMain,
    goSignup,
    goSignin,
    user,
}:{
    auth:() => boolean,
    goMain:() => void,
    goSignup:() => void,
    goSignin:() => void,
    user:any;
}) {
    return (
        <StartWrapper>
        <h1>HoomBa</h1>
        {auth() ? 
        <>
        {user ? 
        <>
        <h2>Welcome, {user.nickname}!</h2>
        <Btn1 type="button" onClick={goMain}>go Main</Btn1>
        </> :<></>}
        </>
        :
        <>
        <div>
        <Btn1 type="button" onClick={goSignup}>sign Up</Btn1><br />
        <Btn1 type="button" onClick={goSignin}>sign In</Btn1>
        </div>
        </>
        }
        </StartWrapper>
    );
}

export default StartPresenter;