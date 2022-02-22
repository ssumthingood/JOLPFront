import styled from 'styled-components';

const Btn1 = styled.button`
    background-color:black;
    color:white;
    border:none;
`;

function StartPresenter({
    goMain,
    goSignup,
    goSignin,
}:{
    goMain:() => void,
    goSignup:() => void,
    goSignin:() => void}) {
    return (
        <>
        <h1>HoomBa</h1>
        {window.localStorage.ID ? 
        <>
        <h2>Welcome, {window.localStorage.ID}!</h2>
        <Btn1 type="button" onClick={goMain}>go Main</Btn1> 
        </>
        :
        <>
        <Btn1 type="button" onClick={goSignup}>sign Up</Btn1><br />
        <Btn1 type="button" onClick={goSignin}>sign In</Btn1>
        </>}
        </>
    );
}

export default StartPresenter;