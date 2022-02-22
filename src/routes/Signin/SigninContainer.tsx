import SigninPresenter from './SigninPresenter';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
 

function SigninConatiner () {
    const navigate = useNavigate();
    let [id, setId] = useState<string>("");
    let [pw, setPw] = useState<string>("");

    function goStart():void{
        //console.log("id : "+ id+ " / pw : "+pw);
        if((id.length>0) && (pw.length>0)){
            window.localStorage.setItem("ID", id);
            console.log(window.localStorage.ID);
            navigate('/');
        }else{
            window.alert("check plz");
        }
    }

    // function idChange(e:Event) {
    //     setId(e.toString());
    //     console.log("id"+id)
    // }

    const idChange = useCallback(
        (e) => {
            setId(e.target.value);
            console.log(id)
        },
        [id]
    )

    // function pwChange(e:Event):void {
    //     setPw(e.toString());
    //     console.log("pw"+pw);
    // }

    const pwChange = useCallback(
        (e) => {
            setPw(e.target.value);
            console.log(pw)
        },
        [pw]
    )

    return (
        <SigninPresenter
        id = {id}
        pw = {pw}
        setId={setId}
        setPw = {setPw}
        idChange = {idChange}
        pwChange = {pwChange}
        goStart = {goStart} />
    )
}

export default SigninConatiner;