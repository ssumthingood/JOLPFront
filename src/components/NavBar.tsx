import styled from 'styled-components';

const MainBar = styled.div`
    min-width:1500px;;
    background-color:black;
    color: whitesmoke;
    font-size:15px;
    height:25px;
    line-height:25px;
`;

const Menus = styled.ul`
    width:100%;
    list-style:none;
    display:flex;
    padding-left:70px;
`;

const Menu = styled.li`
    margin: 0 30px;
    min-width:10%;
    text-align:center;
    height:25px;
    
`;

const MyLink = styled.a`
display:block;
    height:25px;
    color:white;
    &:hover{
        color:black;
        background-color:white;
        transition:0.5s ease;
        cursor:pointer;
    }
`;

const Welcome = styled.span`
    display:block;
    color:white;
    margin: 0 20px;
    min-width:100px;
    //min-width:10%
    text-align:center;
    height:25px;
`;

const LogoutBtn = styled.button`
    // width:180px;
    min-width:10%;
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
                <Menu><MyLink href={`/myteam/${window.localStorage.ID}`}>my team</MyLink></Menu>
                <Menu><MyLink href={`/news/${window.localStorage.ID}`}>news</MyLink></Menu>
                <Menu><MyLink href={`/video/${window.localStorage.ID}`}>video</MyLink></Menu>
                <Menu><MyLink href={`/community/${window.localStorage.ID}`}>community</MyLink></Menu>
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