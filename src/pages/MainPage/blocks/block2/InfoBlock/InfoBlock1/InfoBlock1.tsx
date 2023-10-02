import React, {useEffect, useRef, useState} from 'react';
import classes from "./style.module.css"
import {useDispatch, useSelector} from "react-redux";
import {LayoutGroup, motion, useAnimate, useInView} from 'framer-motion';
import { Link } from 'react-router-dom';

const ItemNews = ({data, isAuth} : any) => {

    const [isCheck, setIsCheck] = useState(false);


    const [block, animate] = useAnimate();
    const blockForView = useRef(null)
    const isView = useInView(blockForView, {once: true})

    useEffect(() => {
        if (isView){
            animate(block.current, {
                translateX: 0,
            }, {
                duration: 0.5,
                type: "spring",
            })
        }
        else{
            animate(block.current, {
                translateX: "-200%",
            }, {
                duration: 0,
            })
        }
    })

    return (
        <motion.div layout ref={blockForView} className={classes.itemNewsContainer}
            whileHover={{
                scale: 1.05,
            }}
        >
            <motion.div className={classes.itemNews} ref={block}>
                <div className={classes.title}>
                    {data.title}
                </div>
                <motion.div className={classes.text}>
                    {isCheck?data.text:data.text.split(" ").slice(0, 80).join(" ")}
                </motion.div>
                <div className={classes.buttons}>
                    <motion.button onClick={() => {setIsCheck(!isCheck)}}
                                   whileHover={{
                                       backgroundColor: "#4E35F2",
                                       scale: 1.05,
                                   }}
                    >
                        {isCheck?"Закрыть":"Посмотреть"}
                    </motion.button>
                    {isAuth?(
                        <motion.button
                                       whileHover={{
                                           backgroundColor: "#4E35F2",
                                           scale: 1.05,
                                       }}
                        >
                            Добавить в избранное
                        </motion.button>
                    ):""}
                </div>
                <div className={classes.info}>
                    <div>Опубликовано: {data.date}</div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const InfoBlock1 = ({isAuth}: any) => {

    const dispatch = useDispatch();
    let newsData = useSelector((state: any) => state.main.news);

    let newsBlock: any = newsData.map((item: any, index: number) => {
        return <ItemNews data = {item} key={item.id} isAuth = {isAuth}/>
    })

    newsBlock = newsBlock.slice(newsBlock.length - 3, newsBlock.length).reverse()

    return (
        <motion.div className={classes.blockContainer}
            exit={{
                opacity: 0,
            }}
        >
            <div className={classes.newsContainer}>
                <LayoutGroup>
                    {newsBlock}

                    <motion.div className={classes.checkAll} layout
                        whileHover={{
                            scale:1.05,
                        }}
                    >
                        <Link to="">
                            Посмотреть все новости
                        </Link>
                    </motion.div>
                </LayoutGroup>
            </div>
        </motion.div>
    );
};

export default InfoBlock1;