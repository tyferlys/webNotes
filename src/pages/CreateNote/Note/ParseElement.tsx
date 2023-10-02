import {AnimatePresence, motion} from "framer-motion";
import classes from "./styleNote.module.css";
import React, {useEffect, useRef, useState} from "react";

const ParseElement = ({reactElement, changeText, changeActiveBlock, deleteElem} : any) : any => {

    const [isViewDel, setIsViewDel] = useState(false);
    const [height, setIsHeight] = useState(null)
    const obj = useRef(null)
    //ЕСТЬ БАГ С УДАЛЕНИМ
    useEffect(() => {
        if (obj != null){
            if (reactElement.blockType === "textarea"){

                if (height == null){
                    // @ts-ignore
                    setIsHeight(obj.current.scrollHeight)
                    // @ts-ignore
                    obj.current.style.height = `${obj.current.scrollHeight}px`
                }
            }
        }
    })

    if (reactElement.blockType === "textarea"){
        console.log(reactElement.blockType)

        return (
            <motion.div className={classes.elementContainer}
                    onMouseEnter={() => {setIsViewDel(true)}}
                    onMouseLeave={() => {setIsViewDel(false)}}

                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
            >
                {
                    React.createElement("textarea", {key: reactElement.id, id: reactElement.id,
                        value: reactElement.content,
                        className: "elem",
                        onClick: () => {changeActiveBlock(reactElement.id)},
                        onChange: changeText,
                        ref: obj,
                    })
                }
                <AnimatePresence>
                    {isViewDel && (
                        <motion.button className={classes.deleteButton}
                                       initial={{
                                           opacity: 0,
                                       }}
                                       animate={{
                                           opacity: 1,
                                       }}
                                       exit={{
                                           opacity: 0,
                                       }}
                                       whileHover={{
                                           scale:1.1
                                       }}
                                       onClick={() => {deleteElem(reactElement.id)}}
                        >
                            Удалить
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>
        )
    }
    else if (reactElement.blockType === "h3"){
        return (
            <motion.div className={classes.elementContainer}
                        onMouseEnter={() => {setIsViewDel(true)}}
                        onMouseLeave={() => {setIsViewDel(false)}}

                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
            >
                {
                    React.createElement("input", {key: reactElement.id, id: reactElement.id,
                        value: reactElement.content, autoFocus: true, placeholder: "Введите заголовок",
                        className: "elem",
                        onClick: () => {changeActiveBlock(reactElement.id)},
                        onChange: changeText,
                        style: {
                            display: "block",
                            outline: "none",
                            border: "none",
                            backgroundColor: "#F2F2F2",
                            fontFamily: "Roboto",
                            fontSize: "30px",
                            width: "80%",
                            fontWeight: "600",
                            margin: "2% 0%",
                        },
                        ref: obj,
                    })
                }
                <AnimatePresence>
                    {isViewDel && (
                        <motion.button className={classes.deleteButton}
                                       initial={{
                                           opacity: 0,
                                       }}
                                       animate={{
                                           opacity: 1,
                                       }}
                                       exit={{
                                           opacity: 0,
                                       }}
                                       whileHover={{
                                           scale:1.1
                                       }}
                                       onClick={() => {deleteElem(reactElement.id)}}
                        >
                            Удалить
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>
        )
    }
    else if (reactElement.blockType === "a"){
        return (
            <motion.div className={classes.elementContainer}
                onMouseEnter={() => {setIsViewDel(true)}}
                onMouseLeave={() => {setIsViewDel(false)}}

                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
            >
                {
                    React.createElement("a", {key: reactElement.id, id: reactElement.id,
                        href: reactElement.href,
                        onClick: () => {changeActiveBlock(reactElement.id)},
                        onChange: changeText,
                        style: {
                            display: "block",
                            width: "80%",
                            fontFamily: "Roboto",
                            fontSize: "18px",
                            fontWeight: "600",
                            padding: "1%",
                            color: "#4E35F2",
                        },
                        ref: obj,
                    }, reactElement.content)
                }
                <AnimatePresence>
                    {isViewDel && (
                        <motion.button className={classes.deleteButton}
                                       initial={{
                                           opacity: 0,
                                       }}
                                       animate={{
                                           opacity: 1,
                                       }}
                                       exit={{
                                           opacity: 0,
                                       }}
                                       whileHover={{
                                           scale:1.1
                                       }}
                                       onClick={() => {deleteElem(reactElement.id)}}
                        >
                            Удалить
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>
        )
    }
}

export default ParseElement;