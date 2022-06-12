import MyteamPresenter from "./MyteamPresenter";
import { useNavigate } from "react-router";
// @ts-ignore
import { getCookie, removeCookie, setCookie } from "Cookie.ts";
import React, { useEffect, useState } from "react";
import axios from "axios";
import GetSquad from "components/GetSquad";

function MyteamConatiner() {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>([]);
    const [userDetail, setUserDetail] = useState<any>(null);
    let [teamInfo, setInfo] = useState([]);
    const [stad, setStad] = useState<any>(null);
    let [career, setCareer] = useState([]);
    const [squad, setSquad] = useState<string[]>([]);

    function auth() {
        if (getCookie("USER")) {
            return true;
        } else {
            window.alert("로그인해주세요");
            window.location.replace("/");
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
    }, [user.user_id]);

    useEffect(() => {
        if (userDetail) {
            setSquad(GetSquad(userDetail.myteam.toString()));
            console.log(squad);
            axios
                .get(
                    `http://13.125.81.51:3003/apis/football/getTeamInfo?teamid=${userDetail.myteam}`,
                    {
                        // teamid: userDetail.myteam,
                    },
                    // { withCredentials: true },
                )
                .then((res) => {
                    setInfo(res.data[0]);
                });

            axios
                .get(
                    `http://13.125.81.51:3003/apis/football/getTeamCareer?teamid=${userDetail.myteam}`,
                    {
                        // teamid: userDetail.myteam,
                    },
                    // { withCredentials: true },
                )
                .then((res) => {
                    setCareer(res.data[0]);
                });

            axios
                .get(
                    `http://13.125.81.51:3003/apis/football/getStadiumInfo?teamid=${userDetail.myteam}`,
                    {
                        // teamid: userDetail.myteam.toString(),
                    },
                    // { withCredentials: true },
                )
                .then((response) => {
                    setStad(response.data[0]);
                });
        }
    }, [userDetail]);

    return <MyteamPresenter user={user} userDetail={userDetail} teamInfo={teamInfo} career={career} squad={squad} stad={stad} />;
}

export default MyteamConatiner;
