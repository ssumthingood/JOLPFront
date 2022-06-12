import MypagePresenter from "./MypagePresenter";
import axios from "axios";
import { useNavigate } from "react-router";
import { ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useState } from "react";
// @ts-ignore
import { getCookie, removeCookie, setCookie } from "Cookie.ts";
import React from "react";

function MypageConatiner() {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>([]);
    const [userDetail, setUserDetail] = useState<any>(null);
    const [myPost, setMypost] = useState<any[]>([]);
    let [nick, setNick] = useState("");
    let [myTeam, setMyTeam] = useState("0");
    const [wrap, setWrap] = useState<Boolean>(true);

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
                    setNick(res.data[0].nickname);
                    setMyTeam(res.data[0].myteam);
                });
        }
    }, [user.user_id]);

    const nickChange = useCallback(
        (e) => {
            setNick(e.target.value);
        },
        [nick],
    );

    const teamChange = useCallback(
        (e) => {
            setMyTeam(e.target.value);
        },
        [myTeam],
    );

    const modifyPost = (postid, e) => {
        e.preventDefault();
        console.log(postid);
        navigate("/modify", { state: postid.toString() });
    };

    const deletePost = (postid, e) => {
        e.preventDefault();
        axios
            .delete(
                `http://13.125.81.51:3003/apis/board/deleteBoard/${postid}`,
                // {
                //     // board_id: postid,
                // },
                {
                    headers: {
                        token: getCookie("USER"),
                    },
                },
            )
            .then((response) => {
                window.alert("삭제되었습니다.");
                window.location.replace("/mypage");
            });
    };

    function signOut() {
        if (userDetail) {
            axios
                .post(
                    "http://13.125.81.51:3003/apis/auth/signOut",
                    {
                        loginid: userDetail.loginid,
                    },
                    { withCredentials: true },
                )
                .then((response) => {
                    removeCookie("USER");
                    window.alert("회원탈퇴 처리되었습니다.");
                    window.location.replace("/");
                });
        }
    }

    function submit() {
        const space = /\s/g;
        if ((nick.length > 0 && !nick.match(space)) || myTeam !== "0") {
            axios
                .put(
                    "http://13.125.81.51:3003/apis/user/updateUser",
                    {
                        myteam: myTeam,
                        nickname: nick,
                    },
                    {
                        headers: {
                            token: getCookie("USER"),
                        },
                    },
                )
                .then((res) => {
                    if (res.data.updateUser) {
                        setNick("");
                        setMyTeam("");
                        window.alert("Change applied!!");
                        window.location.reload();
                    } else {
                        window.alert("unauthorized");
                    }
                });
        } else {
            window.alert("Check plz");
        }
    }

    const changeWrap = () => {
        setWrap(!wrap);
    };

    useEffect(() => {
        if (userDetail) {
            axios
                .get(
                    `http://13.125.81.51:3003/apis/board/getBoard?userid=${userDetail.user_id}`,
                    {
                        // userid: user.user_id.toString(),
                    },
                    // { withCredentials: true },
                )
                .then((response) => {
                    setMypost(response.data.reverse());
                });
        }
    }, [userDetail]);

    return (
        <MypagePresenter
            user={user}
            userDetail={userDetail}
            nick={nick}
            setNick={setNick}
            myPost={myPost}
            nickChange={nickChange}
            submit={submit}
            myTeam={myTeam}
            setMyTeam={setMyTeam}
            teamChange={teamChange}
            modifyPost={modifyPost}
            deletePost={deletePost}
            signOut={signOut}
            wrappin={wrap}
            changeWrap={changeWrap}
        />
    );
}

export default MypageConatiner;
