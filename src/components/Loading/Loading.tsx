import React from "react";
import classes from "./Loading.module.css"
import {motion} from "framer-motion";

const Loading = () => {
    return (
        <div className={classes.container}>
            <motion.div className={classes.circle}
                initial={{
                    scale: 0.8,
                }}
                animate={{
                    translateY: -20,
                    scale: 1,
                }}
                transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0,
                }}
            />
            <motion.div className={classes.circle}
                initial={{
                    scale: 0.6,
                    translateY: 10,
                }}
                animate={{
                    translateY: -20,
                    scale: 1,
                }}
                transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.2,
                }}
            />
            <motion.div className={classes.circle}
                initial={{
                    scale: 0.8,
                }}
                animate={{
                    translateY: -20,
                    scale: 1,
                }}
                transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.4,
                }}
            />
        </div>
    );
};

export default Loading;