import {AnimatePresence, motion} from 'framer-motion';
import React, {useState} from 'react';
import classes from "./styleNote.module.css"

import {
    ItemText,
    setActiveId,
    changeTitle,
    addElement,
    changeTextBlock, toggleEditHref, deleteElement, clearNote
} from "../../../storeRedux/slices/dataNoteSlice";
import {useDispatch, useSelector} from "react-redux";
import EditWindowHref from "../../../components/EditWindow/EditWindowHref";
import ParseElement from "./ParseElement";

const Note = ({toggleFocus, isFocus}: any) => {

    const dispatch = useDispatch()
    const itemsText = useSelector((state: any) => state.dataNote.itemsText)
    let title = useSelector((state: any) => state.dataNote.title)
    let EditHref = useSelector((state: any) => state.dataNote.editWindowHref)

    const addBlockText = () => {
        const id = `textarea_${Math.floor((Math.random() * 9999 - 1000) + 1000)}`
        const element: ItemText = {
            blockType: "textarea",
            id: id,
            content: "",
            href: undefined,
        }
        dispatch(addElement({
            value: element,
        }))
    }

    const addBlockH3 = () => {
        const id = `h3_${Math.floor((Math.random() * 9999 - 1000) + 1000)}`
        const element: ItemText = {
            blockType: "h3",
            id: id,
            content: "",
            href: undefined,
        }
        dispatch(addElement({
            value: element,
        }))
    }

    const addBlockA = () => {
        dispatch(toggleEditHref())
    }

    const changeText = (event: any) => {

        event.target.style.height = "auto"


        event.target.style.height = `${event.target.scrollHeight}px`


        dispatch(changeTextBlock({
            value: event.target.value,
        }))
    }

    const changeActiveBlock = (id: string) => {
        dispatch(setActiveId({
            value: id,
        }))
    }

    const deleteElem = (id: string) => {
        dispatch(deleteElement({
            value: id,
        }))
    }

    const changeTitleText = (event: any) => {
        dispatch(changeTitle({
            value: event.target.value,
        }))
    }

    const blocksItemsText = itemsText.map((item: ItemText, index: number) => {
        return (
            <ParseElement reactElement={item} changeText={changeText}
                          changeActiveBlock={changeActiveBlock} deleteElem={deleteElem} key={index}/>
        )
    })

    return (
        <motion.div className={classes.noteContainer} onClick={toggleFocus} layout>
            <motion.div className={classes.contentContainer}
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.6,
                    type: "spring",
                }}
            >
                <div className={classes.infoNote}>
                    <div className={classes.isSave}>
                        Заметка не сохранена
                    </div>
                </div>

                <div className={classes.noteArea}>
                    <div className={classes.enterTitleNote}>
                        <input type="text" onChange={changeTitleText} value={title} className={classes.inputTitle} placeholder={"Введите название"}/>
                    </div>
                    <div className={classes.toolsContainer}>
                        <div className={classes.titleTools}>Инструменты</div>
                        <div className={classes.tools}>
                            <button onClick={addBlockH3}>Добавить заголовок</button>
                            <button onClick={addBlockText}>Добавить текст</button>
                            <button onClick={addBlockA}>Добавить ссылку</button>
                            <button>Добавить задачу</button>
                        </div>
                    </div>
                    <div className={classes.enterText}>
                        <motion.div className={classes.inputText} placeholder={"Введите текст заметки"}
                            onClick={toggleFocus}
                            animate={{

                            }}
                            tabIndex={0}
                            id={"mainArea"}
                        >
                            {blocksItemsText}
                        </motion.div>
                    </div>
                    <div className={classes.moveNote}>
                        <button>Сохранить</button>
                        <button onClick={() => {dispatch(clearNote())}}>Очистить</button>
                    </div>
                </div>
            </motion.div>
            {EditHref.isActive && <EditWindowHref/>}
        </motion.div>
    );
};

export default Note;



