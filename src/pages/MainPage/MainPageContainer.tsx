import React from 'react';
import MainPage from "./MainPage";
import {useCookies} from "react-cookie";

const MainPageContainer = () => {

    const [cookie, setCookie] = useCookies()

    const isAuth = cookie.isAuth;

    return (
        <MainPage isAuth={isAuth}/>
    );
};

export default MainPageContainer;