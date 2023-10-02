import React from 'react';
import Footer from "./footer/Footer";
import HeaderContainer from "./header/HeaderContainer";
import {LayoutGroup} from "framer-motion";

const Template = ({children, currentPage} : any) => {
    return (
        <>
            <LayoutGroup>
                <HeaderContainer currentPage = {currentPage}/>
                {children}
                <Footer/>
            </LayoutGroup>
        </>
    );
};

export default Template;