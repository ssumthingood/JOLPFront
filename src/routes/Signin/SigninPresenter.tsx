import StartWrapper from "components/StartWrapper";

function SigninPresenter({
    auth,
    id,
    pw,
    setId,
    setPw,
    idChange,
    pwChange,
    goStart
}:{
    auth:()=>boolean,
    id:string,
    pw:string, 
    setId:React.Dispatch<React.SetStateAction<string>>,
    setPw:React.Dispatch<React.SetStateAction<string>>,
    goStart:React.MouseEventHandler<HTMLButtonElement>,
    idChange:any,
    pwChange:any
}) {
    return (
        <>
        {auth()?
        <>
        <StartWrapper>
        Sign In
        <div>
        <h2>id</h2>
        <input type="text" onChange={idChange}/>
        </div>
        <div>
        <h2>pw</h2>
        <input type="password" onChange={pwChange}/>
        </div>
        <button onClick={goStart}>sign in</button>
        </StartWrapper>
        </>:<></>}
        </>
    );
}

export default SigninPresenter;