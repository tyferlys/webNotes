import React from 'react';
import classes from "./styleCreateNote.module.css"
import Note from "./Note/Note";
import { motion } from 'framer-motion';


const CreateNote = ({toggleFocus, isFocus}: any) => {
    return (
        <>
            <motion.main onClick={toggleFocus} onMouseLeave={toggleFocus} layout>
                <motion.div className={classes.mainContainer} layout>
                    <div className={classes.upInfoContainer}>
                        <motion.div className={classes.title}
                            initial={{
                                translateX:"-200%",
                            }}
                            animate={{
                                translateX: 0,
                            }}
                            transition={{
                                duration: 0.6,
                                type: "spring",
                            }}
                        >
                            Создайте свою заметку
                        </motion.div>
                        <motion.div className={classes.helpTitle}
                            initial={{
                                translateX:"-200%",
                            }}
                            animate={{
                                translateX: 0,
                            }}
                            transition={{
                                duration: 0.6,
                                delay:0.1,
                                type: "spring",
                            }}
                        >
                            Не забудь сохранить!
                        </motion.div>
                    </div>

                    <Note toggleFocus = {toggleFocus} isFocus = {isFocus}/>
                </motion.div>
            </motion.main>
        </>
    );
};

export default CreateNote;