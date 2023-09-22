import {motion, useAnimate, useInView} from 'framer-motion';
import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import classes from "./header.module.css";
import {useSelector} from "react-redux";

const Header = ({currentPage} : any) => {

    const [linksCon, animate] = useAnimate()
    const [logo, animate2] = useAnimate();
    const isViewCon = useInView(linksCon)

    const isAuth = useSelector((state: any) => state.dataPerson.isAuth)

    useEffect(() => {
        if (isViewCon){
            animate(linksCon.current, {
                transform: "translateY(0px)",
            }, {
                duration: 0.3,
            })

            animate2(logo.current, {
                transform: "translateX(0px)",
            }, {
                duration: 0.3,
            })
        }
        else{
            animate(linksCon.current, {
                transform: "translateY(-100%)",
            }, {
                duration: 0,
            })

            animate2(logo.current, {
                transform: "translateX(-200%)",
            }, {
                duration: 0,
            })

        }
    }, [linksCon, animate, isViewCon, animate2, logo])

    console.log(currentPage)

    return (
        <header>
            <div className={classes.headerContainer}>
                <motion.div className={classes.logo}
                    ref = {logo}
                    whileHover={{
                        transform: "rotate(3deg)",
                        letterSpacing: "0.1vw",
                    }}
                    whileTap={{
                        color:"#75D966",
                    }}
                >
                    Web notes
                </motion.div>
                <motion.div className={classes.linkContainer}
                    ref={linksCon}
                >
                    <Link to="/" className={classes.link}>
                        <motion.div
                            initial={{
                                color:"#F2F2F2",
                            }}
                            animate={{
                                color: currentPage==="main"?"#75D966":"#F2F2F2",
                            }}
                            className={classes.linkContent}
                        >
                            Главная
                            {currentPage==="main"?lineCurrent():null}
                        </motion.div>
                    </Link>
                    {isAuth && (<Link to="/createNote" className={classes.link}>
                        <motion.div
                            initial={{
                                color:"#F2F2F2",
                            }}
                            animate={{
                                color: currentPage==="createNote"?"#75D966":"#F2F2F2",
                            }}
                            className={classes.linkContent}
                        >
                            Создать
                            {currentPage==="createNote"?lineCurrent():null}
                        </motion.div>
                    </Link>)}
                    <Link to={`/${isAuth?"account":"auth"}`} className={classes.link}>
                        <motion.div
                            initial={{
                                color:"#F2F2F2",
                            }}
                            animate={{
                                color: currentPage==="account"?"#75D966":"#F2F2F2",
                            }}
                            className={classes.linkContent}
                        >
                            {isAuth?"Личный кабинет":"Авторизация"}
                            {currentPage==="account"?lineCurrent():null}
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </header>
    );
};

const lineCurrent = () => {
    return (
        <motion.div
        layoutId="activeLine"
        style={{
            position:"absolute",
            display:"block",
            width:"100%",
            height:"15%",
            backgroundColor:"#75D966",
        }}
        />
    )
}

export default Header;