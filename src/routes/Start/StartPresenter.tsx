import StartWrapper from 'components/StartWrapper';
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
}:{
    auth:() => boolean,
    goMain:() => void,
    goSignup:() => void,
    goSignin:() => void
}) {
    return (
        <StartWrapper>
        <h1>HoomBa</h1>
        {auth() ? 
        <>
        <h2>Welcome, {}!</h2>
        <Btn1 type="button" onClick={goMain}>go Main</Btn1> 
        </>
        :
        <>
        <div>
        <Btn1 type="button" onClick={goSignup}>sign Up</Btn1><br />
        <Btn1 type="button" onClick={goSignin}>sign In</Btn1>
        </div>
        </>}
        </StartWrapper>
    );
}

export default StartPresenter;