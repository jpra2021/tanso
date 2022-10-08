import React from "react";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import RequestBoard from "@pages/RequestBoard";
import Post from "@pages/challenge/Post";
import ChallengeDetail from "@pages/challenge/ChallengeDetail";
import ErrorPage from "@pages/ErrorPage";
import Mypage from "@pages/Mypage";
import Landing from "@pages/Landing";
import Auth from "@pages/Auth";

import RequestBoard from "../pages/RequestBoard";
interface route {
    path: string;
    Component: React.FC;
}

interface routeWrap {
    [key: string]: route;
}

export const ROUTES: routeWrap = {
    Home: {
        path: "/",
        Component: Home,
    },
    Login: {
        path: "/login",
        Component: Login,
    },
    Signup: {
        path: "/signup",
        Component: Signup,
    },
    Post: {
        path: "/challenge/posts",
        Component: Post,
    },
    Landing: {
        path: "/landing",
        Component: Landing,
    },
    ChallengeDetail: {
        path: "/challenge/challengedetail",
        Component: ChallengeDetail,
    },
    Mypage: {
        path: "/mypage",
        Component: Mypage,
    },
    Auth: {
        path: "/auth/:target",
        Component: Auth,
    },
    ErrorPage: {
        path: "*",
        Component: ErrorPage,
    },
};

export const ROUTES_LIST: route[] = Object.values(ROUTES);
