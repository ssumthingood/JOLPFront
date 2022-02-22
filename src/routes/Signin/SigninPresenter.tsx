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
    pwChange:any}) {
    return (
        <>
        Signin
        id
        <input type="text" onChange={idChange}/>
        pw
        <input type="password" onChange={pwChange}/>
        <button onClick={goStart}>signin</button>
        </>
    );
}

export default SigninPresenter;