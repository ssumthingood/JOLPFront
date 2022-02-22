import styled from 'styled-components';

const MainBar = styled.div`
    background-color:black;
    color: white;
    font-size:15px;
    height:25px;
    line-height:25px;
`;

const Menus = styled.ul`
    list-style:none;
    display:flex;
    margin-left:70px;
`;

const Menu = styled.li`
    margin: 0 20px;
    width:190px;
    text-align:center;
    height:25px;
    &:hover{
        color:black;
        background-color:white;
        transition:0.5s ease;
        cursor:pointer;
    }
`;

const MyLink = styled.a`
    display:block;
    width:100%;
`;

const Welcome = styled.span`
    display:block;
    margin: 0 20px;
    width:190px;
    text-align:center;
    height:25px;
`;

const LogoutBtn = styled.button`
    width:180px;
    height:25px;
    margin: 0 30px;
    background-color:black;
    color:white;
    border:none;
    &:hover{
        color:black;
        background-color:white;
        transition:0.5s ease;
        cursor:pointer;
    }
`;

function NavBar () {
    function logOut() {
        window.localStorage.clear();
        window.location.replace('/');
    }

    return (
        <>
        <MainBar>
            <Menus>
                <Menu><MyLink href={`/community/${window.localStorage.ID}`}>community</MyLink></Menu>
                <Menu><MyLink href={`/myteam/${window.localStorage.ID}`}>my team</MyLink></Menu>
                <Menu><MyLink href={`/news/${window.localStorage.ID}`}>news</MyLink></Menu>
                <Menu><MyLink href={`/video/${window.localStorage.ID}`}>video</MyLink></Menu>
                <Menu><MyLink href={`/mypage/${window.localStorage.ID}`}>mypage</MyLink></Menu>
                <Welcome>{window.localStorage.ID}님, 환영합니다!</Welcome>
                <LogoutBtn onClick={logOut}>logout</LogoutBtn>
                {/* {window.localStorage.ID ? <Menu><button onClick={logOut}>logout</button></Menu>:<></>} */}
            </Menus>
        </MainBar>
        </>
    )
}

export default NavBar;