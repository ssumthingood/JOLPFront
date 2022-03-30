import StartWrapper from 'components/StartWrapper';
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
            <Option value="1">아스날</Option>
            <Option value="2">아스톤 빌라</Option>
            <Option value="3">번리</Option>
            <Option value="4">브라이튼</Option>
            <Option value="5">브렌트포드</Option>
            <Option value="6">첼시</Option>
            <Option value="7">크리스탈 팰리스</Option>
            <Option value="8">에버튼</Option>
            <Option value="9">리버풀</Option>
            <Option value="10">레스터</Option>
            <Option value="11">리즈</Option>
            <Option value="12">맨유</Option>
            <Option value="13">맨시티</Option>
            <Option value="14">노리치</Option>
            <Option value="15">뉴캐슬</Option>
            <Option value="16">사우스햄튼</Option>
            <Option value="17">토트넘 핫스퍼</Option>
            <Option value="18">웨스트햄</Option>
            <Option value="19">울버햄튼</Option>
            <Option value="20">왓포드</Option>
        </Select>
        </div>
        <button onClick={goStart}>signup</button>
        </StartWrapper>
    );
}

export default SignupPresenter;