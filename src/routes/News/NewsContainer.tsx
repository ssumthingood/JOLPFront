import NewsPresenter from "./NewsPresenter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// @ts-ignore
import { getCookie, removeCookie, setCookie } from "Cookie.ts";
import React from "react";
import axios from "axios";
import GetTeamcode from "components/GetTeamcode";

function NewsConatiner() {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>([]);
    const [userDetail, setUserDetail] = useState<any>(null);
    const [prediction, setPrediction] = useState<any>(null);
    const [past, setPast] = useState<any>(null);

    function auth() {
        if (getCookie("USER")) {
            return true;
        } else {
            window.alert("로그인해주세요");
            navigate("/");
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
                                    setCookie("USER", res.data.token, {
                                        path: "/",
                                        secure: false,
                                        sameSite: "lax",
                                    });
                                    localStorage.setItem("refreshToken", res.data.refreshToken);
                                    window.location.reload();
                                } else {
                                    removeCookie("USER");
                                    localStorage.removeItem("refreshToken");
                                    alert("세션이 만료되었습니다. 다시 로그인해 주세요");
                                    window.location.replace("/");
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

    useEffect(() => {
        if (userDetail) {
            axios
                .get(
                    `http://13.125.81.51:3003/apis/football/getPredictInfo?teamid=${userDetail.myteam}`,
                    {
                        // teamid: userDetail.myteam.toString(),
                    },
                    // { withCredentials: true },
                )
                .then((response) => {
                    setPrediction(response.data[0]);
                    console.log(response.data[0]);
                });
        }
    }, [userDetail]);

    useEffect(() => {
        if (prediction) {
            axios
                .get(
                    `http://13.125.81.51:3003/apis/football/getRelativeRecord?teamid=${GetTeamcode(prediction.hometeam)}&teamid2=${GetTeamcode(prediction.awayteam)}`,
                    {
                        // teamid: GetTeamcode(prediction.hometeam),
                        // teamid2: GetTeamcode(prediction.awayteam),
                    },
                    // { withCredentials: true },
                )
                .then((response) => {
                    setPast(response.data.slice(0, -1).reverse());
                    console.log(response.data.slice(0, -1));
                });
        }
    }, [prediction]);

    return <NewsPresenter prediction={prediction} past={past} />;
}

export default NewsConatiner;
