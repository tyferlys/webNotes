import React from 'react';
import classes from "./AlertWindow.module.css";

const AlertWindow = (props: any) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalContent}>
                <div className={classes.containerContent}>
                    <div className={classes.titleWindow}>{props.data.title}</div>

                    <div className={classes.textWindow}>
                        {props.data.text}
                    </div>
                    <button onClick={props.data.onClose}>Закрыть</button>
                </div>
            </div>
        </div>
    )
};

export default AlertWindow;