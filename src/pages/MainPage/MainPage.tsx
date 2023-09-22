import React from 'react';
import {useSelector} from "react-redux";

const MainPage = () => {

    const check = useSelector((state: any) => state.main)

    return (
        <>
            <main>
                main
            </main>
        </>
    );
};

export default MainPage;