import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";
import FinderPersonMain from "./FinderPersonMain/FinderPersonMain";
import classes from "./block1.module.css"

const Block1 = ({isAuth} : any) => {

    const [statusFinder, setStatusFinder] = useState(false)

    const wordTitle = "#web_notes"

    const title = wordTitle.split('').map((item, index) => {
        return (
            <motion.div drag dragConstraints={{left:-10, right: 10, top:-10, bottom:10}} key={index}
                        dragSnapToOrigin={true}
                        whileTap={{
                            textShadow:"6px 6px 0px rgba(97, 78, 217, 1)",
                        }}
            >
                {item}
            </motion.div>
        )
    })

    return (
        <div className={classes.block1Container}>
            <div className={classes.block1Left}>
                <div className={classes.block1LeftFirstInfo}>
                    <motion.div className={classes.block1Title}
                                initial={{
                                    translateY: "-200%",
                                    scale: 0,
                                }}
                                animate={{
                                    translateY: "0%",
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 0.6,
                                    type:"spring",
                                }}
                    >{title}</motion.div>
                    <motion.div className={classes.block1UnderTitle}
                                initial={{
                                    translateX: "200%",
                                    scale: 0,
                                }}
                                animate={{
                                    translateX: "0%",
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 0.6,
                                    type:"spring",
                                }}
                    >
                        Пиши и делись!<br/>
                        Прячь самое сокровенное!<br/>
                        <motion.b style={{textDecoration:"underline"}} whileHover={{color:"#614ED9"}}>Web notes</motion.b> всегда и везде с тобой!
                    </motion.div>
                </div>
                <div className={classes.buttonContainer}>
                    {!isAuth && (
                        <Link to={"/auth"}>
                            <motion.button className={classes.buttonBlock1}
                                           initial={{
                                               translateY: "-800%",
                                               scale: 0,
                                           }}
                                           animate={{
                                               translateY: "0%",
                                               scale: 1,
                                           }}
                                           transition={{
                                               duration: 0.6,
                                               type:"spring",
                                           }}
                                           whileHover={{
                                               scale:1.05,
                                               rotate:3,
                                           }}
                            >
                                Авторизация
                            </motion.button>
                        </Link>
                    )}
                    <Link to="#">
                        <motion.button className={classes.buttonBlock1}
                                       initial={{
                                           translateY: "800%",
                                           scale: 0,
                                       }}
                                       animate={{
                                           translateY: "0%",
                                           scale: 1,
                                       }}
                                       transition={{
                                           duration: 0.6,
                                           type:"spring",
                                       }}
                                       whileHover={{
                                           scale:1.05,
                                           rotate:3,
                                       }}
                        >
                            Написать заметку
                        </motion.button>
                    </Link>
                </div>
                <motion.div className={classes.goToUnder}
                            initial={{
                                scale: 0,
                            }}
                            animate={{
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.6,
                                type:"spring",
                            }}
                >
                    Внизу тоже что-то есть!
                </motion.div>
            </div>
            <div className={classes.block1Right}>
                <AnimatePresence mode="wait">
                    {statusFinder?<FinderPersonMain key="finder" closeFinder={() => {setStatusFinder(false)}}/>:(<motion.svg
                        viewBox="0 0 24 24"
                        fill="#4E35F2"
                        height="6em"
                        width="6em"
                        key="buttonClick"

                        exit={{
                            translateX: "800%",
                            scale: 0,
                        }}
                        initial={{
                            translateX: "800%",
                            scale: 0,
                        }}
                        animate={{
                            translateX: "0%",
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.6,
                            type:"spring",
                        }}
                        whileHover={{
                            scale:1.1,
                            fill: "#75D966",
                        }}
                        onClick={() => {setStatusFinder(true)}}
                    >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                    </motion.svg>)}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Block1;