import React from 'react';
import Footer from "./footer/Footer";
import HeaderContainer from "./header/HeaderContainer";

const Template = ({children, currentPage} : any) => {
    return (
        <>
            <HeaderContainer currentPage = {currentPage}/>
                {children}
            <Footer/>
        </>
    );
};

export default Template;