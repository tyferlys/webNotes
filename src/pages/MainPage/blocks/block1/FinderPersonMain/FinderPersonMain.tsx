import { motion } from 'framer-motion';
import React, {useState} from 'react';
import classes from "./finderMain.module.css"


const FinderPersonMain = ({closeFinder} : any) => {

    const [isMove, setIsMove] = useState(true)
    const stopMove = (event: any) => {
        event.stopPropagation()
        const name = event.target.placeholder;
        console.log(event.target)
        if (name === undefined)
            setIsMove(true)
        else
            setIsMove(false)
    }

    return (
        <motion.div className={classes.finderContainer}
                drag={isMove}
                whileDrag={{
                    scale:0.8,
                }}
                dragConstraints={{
                    left: -30,
                    right: 30,
                    top: -30,
                    bottom: 30,
                }}
                onDragStart={stopMove}
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
        >
            <motion.input type="text" placeholder="найти пользователя"
                whileHover={{
                    scale:1.05,
                    color:"#614ED9",
                    borderColor:"#614ED9",
                }}
                whileFocus={{
                  scale:1.05,
                  color:"#614ED9",
                  borderColor:"#614ED9",
                }}
                onDragStart={stopMove}
                onMouseLeave={() => {setIsMove(true)}}
            />
            <div>
                <motion.button
                    whileHover={{
                        scale:1.05,
                        backgroundColor:"#4E35F2",
                    }}
                >Найти</motion.button>
                <motion.button onClick={closeFinder}
                   whileHover={{
                       scale:1.05,
                       backgroundColor:"#4E35F2",
                   }}
                >Закрыть</motion.button>
            </div>
        </motion.div>
    );
};

export default FinderPersonMain;