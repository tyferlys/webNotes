import {AnimatePresence, color, motion, useAnimate, useInView} from 'framer-motion';
import React, {useEffect, useRef, useState} from 'react';
import classes from "./block2.module.css"
import InfoBlock1 from "./InfoBlock/InfoBlock1/InfoBlock1";

const Block2 = ({isAuth} : any) => {

    const [typeInfo, setTypeInfo] = useState(0);

    const menuRef = useRef(null)
    const [typeInfo1, animate1] = useAnimate();
    const [typeInfo2, animate2] = useAnimate();
    const isViewMenu = useInView(menuRef, {once: true});

    useEffect(() => {
        if (isViewMenu){
            animate1(typeInfo1.current, {
                translateX: "0%",
            }, {
                duration: 0.5,
                type: "spring",
            })
            animate2(typeInfo2.current, {
                translateX: "0%",
            }, {
                duration: 0.5,
                type: "spring",
            })
        }
        else{
            animate1(typeInfo1.current, {
                translateX: "-300%",
            }, {
                duration: 0,
            })
            animate2(typeInfo2.current, {
                translateX: "300%",
            }, {
                duration: 0,
            })
        }
    }, [animate1, animate2, typeInfo1, typeInfo2, isViewMenu])

    return (
        <div className={classes.block2Container}>
            <div className={classes.firstBlock}>
                <svg
                    viewBox="0 0 1024 1024"
                    fill="#F2F2F2"
                    height="3em"
                    width="3em"
                >
                    <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
                </svg>
                <div className={classes.menu} ref = {menuRef}>
                    <motion.div className={classes.itemMenu}
                        onClick={() => {setTypeInfo(0)}}
                        animate={{
                            color:typeInfo==0?"#75D966":"#F2F2F2",
                            scale:typeInfo==0?1.1:1,
                        }}
                        transition={{
                            duration:0.3,
                        }}
                        ref={typeInfo1}
                    >
                        Новости {typeInfo == 0 && <ActiveTypeInfo/>}
                    </motion.div>
                    <motion.div className={classes.itemMenu}
                        onClick={() => {setTypeInfo(1)}}
                        animate={{
                            color:typeInfo==1?"#75D966":"#F2F2F2",
                            scale:typeInfo==1?1.1:1,
                        }}
                        transition={{
                            duration:0.3,
                        }}
                        ref={typeInfo2}
                    >
                        Заметки дня {typeInfo == 1 && <ActiveTypeInfo/>}
                    </motion.div>
                </div>

                <AnimatePresence mode="wait">
                    {typeInfo == 0? <InfoBlock1 isAuth = {isAuth}/>:""}
                </AnimatePresence>
            </div>
        </div>
    );
};

const ActiveTypeInfo = () => {
    return <motion.div
        layoutId="active"
        style={{
            position:"absolute",
            borderRadius: "20px",
            display:"block",
            width:"90%",
            left:"5%",
            height:"5%",
            backgroundColor:"#75D966",
        }}
    />
}

export default Block2;