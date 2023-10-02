import React, {useEffect, useRef, useState} from 'react';
import classes from "./mainPage.module.css"
import Block1 from "./blocks/block1/Block1";
import Block2 from "./blocks/block2/Block2";

const MainPage = ({isAuth} : any) => {

    return (
        <main>
            <div className={classes.mainContainer}>
                <Block1 isAuth = {isAuth}/>
                <Block2 isAuth = {isAuth}/>
            </div>
        </main>
    );
};

export default MainPage;