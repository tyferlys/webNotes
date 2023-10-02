import { motion } from 'framer-motion';
import React from 'react';
import classes from "./EditWindowHref.module.css"
import {useDispatch, useSelector} from "react-redux";
import {
    addElement,
    changeHrefHref,
    changeTextHref, createHref,
    ItemText,
    toggleEditHref
} from "../../storeRedux/slices/dataNoteSlice";

const EditWindowHref = (props: any) => {

    const dispatch = useDispatch()
    const EditWindowHref = useSelector((state: any) => state.dataNote.editWindowHref)

    const changeText = (event: any) => {
        dispatch(changeTextHref({
            value: event.target.value
        }))
    }

    const changeHref = (event: any) => {
        dispatch(changeHrefHref({
            value: event.target.value
        }))
    }

    const createA = () => {
        const id = `a_${Math.floor((Math.random() * 9999 - 1000) + 1000)}`
        const element = {
            id: id,
        }
        dispatch(createHref({
            value: element,
        }))
        dispatch(toggleEditHref())
    }

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
                    }}
                    transition={{
                        animate: 0.3,
                        type: "spring",
                    }}
                >
                    <div className={classes.titleWindow}>Добавить ссылку</div>

                    <div className={classes.labelFor}>Введите текст ссылки</div>
                    <input type="text" value={EditWindowHref.text} onChange={changeText} className={classes.inputText} placeholder={"Введите текст ссылки"}/>
                    <div className={classes.labelFor}>Введите ссылку на веб-ресурс</div>
                    <input type="text" value={EditWindowHref.href} onChange={changeHref} className={classes.inputText} placeholder={"Введите ссылку на веб-ресурс"}/>

                    <div className={classes.buttonContainer}>
                        <button onClick={createA}>Создать</button>
                        <button onClick={() => {dispatch(toggleEditHref())}}>Закрыть</button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default EditWindowHref;