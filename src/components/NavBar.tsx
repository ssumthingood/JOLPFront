import styled from "styled-components";
// @ts-ignore
import { getCookie, setCookie, removeCookie } from "Cookie.ts";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const MainBar = styled.div`
    min-width: 1500px;
    background-color: black;
    color: whitesmoke;
    font-size: 15px;
    height: 25px;
    line-height: 25px;
`;

const Menus = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    padding-left: 70px;
`;

const Menu = styled.li`
    margin: 0 30px;
    min-width: 10%;
    text-align: center;
    height: 25px;
`;

const MyLink = styled.a`
    display: block;
    height: 25px;
    color: white;
    &:hover {
        color: black;
        background-color: white;
        transition: 0.5s ease;
        cursor: pointer;
    }
`;

const Welcome = styled.span`
    display: block;
    color: white;
    margin: 0 20px;
    min-width: 100px;
    //min-width:10%
    text-align: center;
    height: 25px;
    overflow: hidden;
`;

const LogoutBtn = styled.button`
    // width:180px;
    min-width: 10%;
    height: 25px;
    margin: 0 30px;
    background-color: black;
    color: white;
    border: none;
    &:hover {
        color: black;
        background-color: white;
        transition: 0.5s ease;
        cursor: pointer;
    }
`;

function NavBar() {
    const [user, setUser] = useState<any>([]);
    const [userDetail, setUserDetail] = useState<any>(null);
    const [auth, setAuth] = useState<boolean>(false);

    useEffect(() => {
        if (getCookie("USER")) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, []);

    useEffect(() => {
        if (getCookie("USER")) {
            setAuth(true);
        } else {
            window.alert("로그인해주세요");
            window.location.replace("/");
            setAuth(false);
        }
    }, []);

    useEffect(() => {
        if (auth) {
            axios
                .post(
                    "http://13.125.81.51:3003/apis/auth/authToken",
                    {
                        token: getCookie("USER"),
                    },
                    { withCredentials: true },
                )
                .then((response) => {
                    console.log("auth completed");
                    if (response.data !== -3) {
                        console.log(response.data);
                        setUser(response.data);
                    } else if (response.data === -3 && localStorage.refreshToken) {
                        window.alert("refreshing...");
                        axios
                            .post(
                                "http://13.125.81.51:3003/apis/auth/refreshToken",
                                {
                                    refreshToken: localStorage.refreshToken,
                                },
                                { withCredentials: true },
                            )
                            .then((res) => {
                                if (res.data !== -3) {
                                    window.alert("refreshed");
                                    console.log(res.data.token);
                                    setCookie("USER", res.data.token, {
                                        path: "/",
                                        secure: false,
                                        sameSite: "lax",
                                    });
                                    localStorage.setItem("refreshToken", res.data.refreshToken);
                                    // window.location.reload();
                                } else {
                                    removeCookie("USER");
                                    localStorage.removeItem("refreshToken");
                                    alert("세션이 만료되었습니다. 다시 로그인해 주세요");
                                    // window.location.reload();
                                }
                            });
                    }
                });
        }
    }, [auth]);

    useEffect(() => {
        if (user) {
            axios
                .get(
                    `http://13.125.81.51:3003/apis/user/getUser/${user.user_id}`,
                    {
                        // userid: user.user_id,
                    },
                    // { withCredentials: true },
                )
                .then((res) => {
                    setUserDetail(res.data[0]);
                });
        }
    }, [user]);

    function logOut() {
        removeCookie("USER");
        localStorage.removeItem("refreshToken");
        window.alert("로그아웃 되었습니다.");
        window.location.replace("/");
    }

    return (
        <>
            <MainBar>
                <Menus>
                    <Menu>
                        <MyLink href={`/myteam`}>my team</MyLink>
                    </Menu>
                    <Menu>
                        <MyLink href={userDetail ? `/news/${userDetail.myteam}/1` : `/main`}>predict</MyLink>
                    </Menu>
                    <Menu>
                        <MyLink href={`/schedule`}>schedule</MyLink>
                    </Menu>
                    <Menu>
                        <MyLink href={userDetail ? `/community/${userDetail.myteam}/1` : `/main`}>community</MyLink>
                    </Menu>
                    <Menu>
                        <MyLink href={`/mypage`}>mypage</MyLink>
                    </Menu>
                    <Welcome>Welcome, {userDetail?.nickname}!</Welcome>
                    <LogoutBtn onClick={logOut}>logout</LogoutBtn>
                </Menus>
            </MainBar>
        </>
    );
}

export default NavBar;
