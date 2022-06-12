import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CommunityDetailPresenter from "./CommunityDetailPresenter";
// @ts-ignore
import { getCookie, removeCookie, setCookie } from "Cookie.ts";
import React from "react";

function CommunityDetailConatiner() {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>([]);
    const [userDetail, setUserDetail] = useState<any>(null);
    const [post, setPost] = useState(null);
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
        if (user.user_id) {
            axios.get(`http://13.125.81.51:3003/apis/user/getUser/${user.user_id.toString()}`, {}).then((res) => {
                setUserDetail(res.data[0]);
            });
        }
    }, [user]);

    function goCommunity() {
        navigate(`/community/${userDetail.myteam}/1`);
    }

    const modifyPost = (postid, e) => {
        e.preventDefault();
        navigate("/modify", { state: postid.toString() });
    };

    const deletePost = (postid, e) => {
        e.preventDefault();
        axios
            .delete(`http://13.125.81.51:3003/apis/board/deleteBoard/${postid}`, {
                headers: {
                    token: getCookie("USER"),
                },
            })
            .then((response) => {
                window.alert("삭제되었습니다.");
                navigate(-1);
            });
    };

    useEffect(() => {
        axios.get(`http://13.125.81.51:3003/apis/board/getBoard/${params.postid}`, {}).then((response) => {
            setPost(response.data[0]);
        });
    }, []);

    return <CommunityDetailPresenter auth={auth} user={user} userDetail={userDetail} post={post} modifyPost={modifyPost} deletePost={deletePost} goCommunity={goCommunity} />;
}

export default CommunityDetailConatiner;
