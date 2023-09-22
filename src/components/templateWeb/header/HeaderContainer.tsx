import React from 'react';
import Header from "./Header";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {setIsAuth, setUserId} from "../../../storeRedux/slices/dataPersonSlice";

const HeaderContainer = ({currentPage} : any) => {

    const [cookie, setCookie] = useCookies()

    const isAuth = cookie.isAuth;

    const dispatch = useDispatch();

    if (isAuth === undefined){
        setCookie("isAuth", false, {
            maxAge: 60 * 60 * 72,
        });
        dispatch(setIsAuth({
            value: false,
        }))
    }
    else if (isAuth){
        dispatch(setIsAuth({value: true}))
        const userId = cookie.id;
        dispatch(setUserId(userId))
    }

    else dispatch(setIsAuth({value: false}))


    return (
        <Header currentPage = {currentPage}/>
    );
};

export default HeaderContainer;