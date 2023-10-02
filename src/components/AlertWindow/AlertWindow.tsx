import { motion } from 'framer-motion';
import React from 'react';
import classes from "./AlertWindow.module.css";

const AlertWindow = (props: any) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalContent}>
                <motion.div className={classes.containerContent}
                    initial={{
                        scale: 0,
                        rotate: 360,
                    }}
                    animate={{
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={{
                        animate: 0.3,
                        type: "spring",
                    }}
                >
                    <div className={classes.titleWindow}>{props.data.title}</div>

                    <div className={classes.textWindow}>
                        {props.data.text}
                    </div>
                    <button onClick={props.data.onClose}>Закрыть</button>
                </motion.div>
            </div>
        </div>
    )
};

export default AlertWindow;