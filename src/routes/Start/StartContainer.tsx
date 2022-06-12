import StartPresenter from "./StartPresenter";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
// @ts-ignore
import { getCookie, setCookie, removeCookie } from "Cookie.ts";
import axios from "axios";
import React from "react";

function StartConatiner() {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>([]);
    // const [user,setUser] = useState(null);
    const [userDetail, setUserDetail] = useState<any>(null);

    function auth() {
        if (getCookie("USER")) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        if (auth()) {
            axios
                .post(
                    "http://13.125.81.51:3003/apis/auth/authToken",
                    {
                        token: getCookie("USER"),
                    },
                    { withCredentials: true },
                )
                .then((response) => {
                    if (response.data !== -3) {
                        console.log(response.data);
                        setUser(response.data);
                    } else if (response.data === -3 && localStorage.refreshToken) {
                        // window.alert("refreshing...");
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
                                    // window.alert("refreshed");
                                    // console.log(res.data.token);
                                    setCookie("USER", res.data.token, {
                                        path: "/",
                                        secure: false,
                                        sameSite: "lax",
                                    });
                                    localStorage.setItem("refreshToken", res.data.refreshToken);
                                    //window.location.reload();
                                } else {
                                    removeCookie("USER");
                                    localStorage.removeItem("refreshToken");
                                    alert("세션이 만료되었습니다. 다시 로그인해 주세요");
                                    window.location.reload();
                                }
                            });
                    }
                });
        }
    }, [auth()]);

    useEffect(() => {
        if (user.user_id) {
            axios
                .get(
                    `http://13.125.81.51:3003/apis/user/getUser/${user.user_id.toString()}`,
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

    function goMain() {
        if (getCookie("USER")) {
            window.location.assign(`/main`);
        } //쿠키 내에 로그인정보 있을시 시작화면으로
    }

    function goSignup() {
        navigate("/signup");
    }

    function goSignin() {
        navigate("/signin");
    }

    return <StartPresenter goMain={goMain} goSignup={goSignup} goSignin={goSignin} auth={auth} user={user} userDetail={userDetail} />;
}

export default StartConatiner;
