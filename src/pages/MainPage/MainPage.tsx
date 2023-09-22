import React from 'react';
import {useSelector} from "react-redux";
import AlertWindow from "../../components/AlertWindow/AlertWindow";

const MainPage = () => {

    const check = useSelector((state: any) => state.main)

    return (
        <>
            <main>

            </main>
        </>
    );
};

export default MainPage;