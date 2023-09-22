import {motion, useAnimate, useInView} from 'framer-motion';
import React, {useEffect} from 'react';
import classes from "./Footer.module.css";

const Footer = () => {

    const [obj1Info, animate1] = useAnimate();
    const [obj2Info, animate2] = useAnimate();

    const obj1View = useInView(obj1Info)
    const obj2View = useInView(obj2Info)

    useEffect(() => {

        if (obj1View && obj2View){
            animate1(obj1Info.current, {
                opacity: 1,
            }, {
                duration: 0.5,
            })

            animate2(obj2Info.current, {
                opacity: 1,
            }, {
                duration: 0.5,
            })
        }
        else if (!obj1View && !obj2View) {
            animate1(obj1Info.current, {
                opacity: 0,
            }, {
                duration: 0,
            })

            animate2(obj2Info.current, {
                opacity: 0,
            }, {
                duration: 0,
            })
        }
    }, [obj1View, obj2View, obj1Info, obj2Info, animate1, animate2])

    return (
        <footer>
            <motion.div className={classes.info1}
                        ref = {obj1Info}
                        whileHover={{
                            scale:1.02,
                        }}
                        whileTap={{
                            scale:1.03,
                            backgroundColor:"#75D966",
                            transition: {
                                duration: 0.2,
                            }
                        }}
            >
                <div className={classes.infoTitle}>О проекте</div>
                <div className={classes.infoText}>
                    Проект разработан как пет-проект, в целях практики по изучению <b>React</b>, <b>Redux</b> и <b>Framer
                    Motion</b>. Цель проекта - создание сервиса по созданию заметок и работы с ними.
                </div>
                <div className={classes.infoEnd}>
                    Web Notes
                </div>
            </motion.div>

            <motion.div className={classes.info2}
                        ref = {obj2Info}
                        whileHover={{
                            scale:1.02,
                        }}
                        whileTap={{
                            scale:1.03,
                            backgroundColor:"#75D966",
                            transition: {
                                duration: 0.2,
                            }
                        }}
            >
                <div className={classes.infoTitle}>О разработчике</div>
                <div className={classes.infoText}>
                    Создатель проекта - <b>Климов Денис</b>. На момент создания сайта - обучаюсь на 3 курсе.
                </div>
                <div className={classes.infoEnd}>
                    Web Notes
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;