import React from 'react';
import Auth from "./Auth";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {setIsAuth, setUserId} from "../../storeRedux/slices/dataPersonSlice";

const AuthContainer = () => {


    const [cookie, setCookie] = useCookies();
    const dispatch = useDispatch();

    const enterAcc = (idUser: number) => {
        setCookie("isAuth", true, {
            maxAge: 60 * 60 * 72,
        })
        setCookie("id", idUser, {
            maxAge: 60 * 60 * 72,
        })

        dispatch(setIsAuth({
            value: true,
        }))
        dispatch(setUserId({
            value: 1,
        }))
    }

    return (
        <Auth enterAcc = {enterAcc}/>
    );
};

export default AuthContainer;