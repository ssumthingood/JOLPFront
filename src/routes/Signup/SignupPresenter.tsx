import StartWrapper from 'components/StartWrapper';
import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
    font-size:14px;
    width: 120px;
    border: 1px solid #999;
    font-family: inherit;
`;

const Option = styled.option`
    width: 150px;
    border: 1px solid #999;
    font-family: inherit;
`;

function SignupPresenter({
    auth,
    name,
    setName,
    nameChange,
    id,
    pw,
    pw2,
    setId,
    setPw,
    setPw2,
    idChange,
    pwChange,
    pw2Change,
    myTeam,
    setMyTeam,
    teamChange,
    goStart
}:{
    auth:()=>boolean,
    name:string,
    setName:React.Dispatch<React.SetStateAction<string>>,
    nameChange:(e: any) => void, id:string, pw:string,
    pw2:string,
    setId:React.Dispatch<React.SetStateAction<string>>,
    setPw:React.Dispatch<React.SetStateAction<string>>,
    setPw2:React.Dispatch<React.SetStateAction<string>>,
    goStart:() => void,
    idChange:(e: any) => void,
    pwChange:(e: any) => void,
    pw2Change:(e: any) => void,
    myTeam:string,
    setMyTeam:React.Dispatch<React.SetStateAction<string>>,
    teamChange:(e: any) => void
}) {
    return (
        <>
        {auth() ? 
        <StartWrapper>
        </StartWrapper>:
        <StartWrapper>
        <h2>Signup</h2>
        <div>
        <h3>name</h3>
        <input type="text" onChange={nameChange}/>
        </div>
        <div>
        <h3>id</h3>
        <input type="text" onChange={idChange}/>
        </div>
        <div>
        <h3>pw</h3>
        <input type="password" onChange={pwChange}/>
        </div>
        <div>
        <h3>pw check</h3>
        <input type="password" onChange={pw2Change}/>
        </div>
        <div>
        <h3>my team</h3>
        <Select name="team" onChange={teamChange}>
            <Option value="0">선택</Option>
            <Option value="120">아스날</Option>
            <Option value="121">아스톤 빌라</Option>
            <Option value="122">번리</Option>
            <Option value="130">브라이튼</Option>
            <Option value="129">브렌트포드</Option>
            <Option value="134">첼시</Option>
            <Option value="136">크리스탈 팰리스</Option>
            <Option value="138">에버튼</Option>
            <Option value="145">리버풀</Option>
            <Option value="144">레스터</Option>
            <Option value="143">리즈</Option>
            <Option value="147">맨유</Option>
            <Option value="146">맨시티</Option>
            <Option value="150">노리치</Option>
            <Option value="149">뉴캐슬</Option>
            <Option value="158">사우스햄튼</Option>
            <Option value="163">토트넘 핫스퍼</Option>
            <Option value="166">웨스트햄</Option>
            <Option value="171">울버햄튼</Option>
            <Option value="164">왓포드</Option>
        </Select>
        </div>
        <button onClick={goStart}>signup</button>
        </StartWrapper>}
        </>
    );
}

export default SignupPresenter;