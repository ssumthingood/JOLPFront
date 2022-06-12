import ModifyPresenter from "./ModifyPresenter";
import { useNavigate, useParams, useLocation } from "react-router";
// @ts-ignore
import { getCookie, removeCookie, setCookie } from "Cookie.ts";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

function ModifyConatiner() {
    const navigate = useNavigate();
    const location: any = useLocation();
    const [user, setUser] = useState<any>([]);
    const [userDetail, setUserDetail] = useState<any>(null);
    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");
    let [anony, setAnony] = useState("0");
    const [post, setPost] = useState([]);
    const params = useParams();

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
        if (location.state === null) {
            window.alert("no data");
            navigate("/mypage");
        }
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
                })
                .then(() => {
                    axios
                        .get(
                            `http://13.125.81.51:3003/apis/board/getBoard/${parseInt(location.state.toString())}`,
                            {
                                // board_id: parseInt(location.state.toString()),
                            },
                            // { withCredentials: true },
                        )
                        .then((response) => {
                            setPost(response.data[0]);
                            setTitle(response.data[0].title);
                            setContent(response.data[0].content);
                        });
                });
        }
    }, [user.user_id]);

    const titleChange = useCallback(
        (e) => {
            setTitle(e.target.value);
        },
        [title],
    );

    const contentChange = useCallback(
        (e) => {
            setContent(e.target.value);
        },
        [content],
    );

    const anonyChange = useCallback(
        (e) => {
            if (anony === "0") {
                anony = "1";
            } else if (anony === "1") {
                anony = "0";
            }
            setAnony(anony);
        },
        [anony],
    );

    function submit() {
        content.replace("<oembed", "<Oembed");
        content.replace("</oembed>", "</Oembed>");
        content.replace("<figure", "<Figure");
        content.replace("</figure>", "</Figure>");
        if (post && location.state) {
            axios
                .put(
                    "http://13.125.81.51:3003/apis/board/updateBoard",
                    {
                        board_id: parseInt(location.state),
                        title: title,
                        content: content,
                        isanony: anony,
                    },
                    {
                        headers: {
                            token: getCookie("USER"),
                        },
                    },
                )
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        window.alert("modifying completed!!");
                        navigate(-1);
                    } else {
                        window.alert("status not 200");
                    }
                });
        } else {
            window.alert("post data none");
        }
    }

    return (
        <ModifyPresenter
            user={user}
            userDetail={userDetail}
            auth={auth}
            post={post}
            title={title}
            setTitle={setTitle}
            titleChange={titleChange}
            content={content}
            setContent={setContent}
            contentChange={contentChange}
            anony={anony}
            setAnony={setAnony}
            anonyChange={anonyChange}
            submit={submit}
        />
    );
}

export default ModifyConatiner;
