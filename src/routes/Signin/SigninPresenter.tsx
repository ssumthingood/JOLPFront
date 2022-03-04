import StartWrapper from "components/StartWrapper";

function SigninPresenter({
    id,
    pw,
    setId,
    setPw,
    idChange,
    pwChange,
    goStart
}:{id:string,
    pw:string, 
    setId:React.Dispatch<React.SetStateAction<string>>,
    setPw:React.Dispatch<React.SetStateAction<string>>,
    goStart:React.MouseEventHandler<HTMLButtonElement>,
    idChange:any,
    pwChange:any
}) {
    return (
        <StartWrapper>
        Signin
        <div>
        <h2>id</h2>
        <input type="text" onChange={idChange}/>
        </div>
        <div>
        <h2>pw</h2>
        <input type="password" onChange={pwChange}/>
        </div>
        <button onClick={goStart}>signin</button>
        </StartWrapper>
    );
}

export default SigninPresenter;