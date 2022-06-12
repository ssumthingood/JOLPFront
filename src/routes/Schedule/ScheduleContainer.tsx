import { useEffect, useState } from "react";
import GetLogo from "components/GetLogo";
import SchedulePresenter from "./SchedulePresenter";
import { useLocation, useNavigate } from "react-router";
import moment from "moment";
// @ts-ignore
import { getCookie, removeCookie, setCookie } from "Cookie.ts";
import axios from "axios";
import React from "react";

let prevNum = 0;
let nextNum = 0;

function ScheduleConatiner() {
    const navigate = useNavigate();
    const location: any = useLocation();
    const [user, setUser] = useState<any>([]);
    const [userDetail, setUserDetail] = useState<any>(null);
    const [matches, setMatch] = useState<any>([]);

    let [date, setDate] = useState(moment("2022-05-22").format("YYYY-MM-DD"));

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

    function goPrevious(): void {
        prevNum++;
        if (prevNum > nextNum) {
            setDate(
                moment("2022-05-22")
                    .clone()
                    .subtract(prevNum - nextNum, "days")
                    .format("YYYY-MM-DD"),
            );
        } else {
            setDate(
                moment("2022-05-22")
                    .clone()
                    .add(nextNum - prevNum, "days")
                    .format("YYYY-MM-DD"),
            );
        }
    }

    function goNext(): void {
        nextNum++;
        if (nextNum > prevNum) {
            setDate(
                moment("2022-05-22")
                    .clone()
                    .add(nextNum - prevNum, "days")
                    .format("YYYY-MM-DD"),
            );
        } else {
            setDate(
                moment("2022-05-22")
                    .clone()
                    .subtract(prevNum - nextNum, "days")
                    .format("YYYY-MM-DD"),
            );
        }
    }

    useEffect(() => {
        if (auth()) {
            axios
                .get(
                    `http://13.125.81.51:3003/apis/football/getMatch?date=${date.toString()}`,
                    // {
                    //     date: date.toString(),
                    // },
                    // {
                    //     withCredentials: true,
                    // },
                )
                .then((response) => {
                    setMatch(response.data);
                });
        }
    }, [date]);

    return <SchedulePresenter matches={matches} date={date} setDate={setDate} goPrevious={goPrevious} goNext={goNext} getLogo={GetLogo} />;
}

export default ScheduleConatiner;
