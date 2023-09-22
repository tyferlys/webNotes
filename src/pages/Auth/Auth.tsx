import { motion } from 'framer-motion';
import React,  {useState} from 'react';
import { useForm } from 'react-hook-form';
import classes from "./auth.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import AlertWindow from "../../components/AlertWindow/AlertWindow";
import {User} from "../../storeRedux/slices/dataWebSlice";

const Auth = ({enterAcc} : any) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm()

    const [isMove, setIsMove] = useState(true);

    const [statusAuth, setStatusAuth] = useState(0);

    const users = useSelector((state : any) => state.dataWeb.users);

    const navigate = useNavigate();

    const funcSubmit = async (data : any) => {
        if (users.findIndex((item: User) => item.login === data.login && item.password === data.password) !== -1){
            setStatusAuth(1)
            const id = users.find((item: User) => item.login === data.login && item.password === data.password).id;
            enterAcc(id)
            reset();

            navigate("/")
        }
        else if (users.findIndex((item: User) => item.login === data.login && item.password != data.password) !== -1)
            setStatusAuth(2)
        else
            setStatusAuth(3)
    }


    const stopMove = (event: any) => {
        event.stopPropagation()
        const name = event.target.className?.split("_")[1]
        console.log(event)
        if (name === "inputValue")
            setIsMove(false)
        else
            setIsMove(true)
    }

    let resultAlert = null;

    if (statusAuth === 1){
        resultAlert = <AlertWindow data={{
            title:"Успешно",
            text:"Вы успешно авторизировались и скоро будете перенаправлены на главную страницу.",
            onClose: () => {setStatusAuth(0)},
        }}/>
    }
    else if (statusAuth === 2){
        resultAlert = <AlertWindow data={{
            title:"Ошибка",
            text:"Неправильный пароль.",
            onClose: () => {setStatusAuth(0)},
        }}/>
    }
    else if (statusAuth === 3){
        resultAlert = <AlertWindow data={{
            title:"Ошибка",
            text:"Пользователь с таким логином не найден.",
            onClose: () => {setStatusAuth(0)},
        }}/>
    }


    return (
        <main>
            <div className={classes.mainContainer}>
                <motion.div className={classes.authContainer}
                            initial={{
                                translateX:"-200%",
                                rotate:"30deg",
                            }}
                            animate={{
                                translateX:"0%",
                                rotate:"0deg"
                            }}
                            transition={{
                                duration:0.6,
                                type:"spring",
                            }}
                            whileHover={{
                                scale:1.02,
                            }}
                            whileDrag={{
                                scale:isMove?0.9:1,
                            }}
                            drag={isMove}
                            dragConstraints={{
                                left:-20,
                                right: 20,
                                top:-20,
                                bottom:20,
                            }}
                            onDragStart={stopMove}
                >
                    <div className={classes.title}>
                        Авторизация
                    </div>
                    <div className={classes.formContainer}>
                        <form onSubmit={handleSubmit(funcSubmit)}>
                            <div className={classes.labelForInput}>Логин</div>
                            <motion.div className={classes.inputValueContainer}
                                        whileHover={{
                                            color:"#4E35F2",
                                        }}
                            >
                                <motion.input type="text" placeholder="Введите логин" className={classes.inputValue}
                                              whileHover={{
                                                  color:"#4E35F2",
                                                  borderColor:"#4E35F2",
                                              }}
                                              whileFocus={{
                                                  scale:1.05,
                                                  color:"#4E35F2",
                                                  borderColor:"#4E35F2",
                                              }}
                                              onDragStart={stopMove}
                                              onMouseLeave={() => {setIsMove(true)}}

                                              {...register("login", {
                                                  required: true,
                                                  minLength: 3,
                                              })}
                                />
                            </motion.div>
                            {errors.login && <span className={classes.errors}>Ошибка в поле</span>}
                            <div className={classes.labelForInput}>Пароль</div>
                            <motion.div className={classes.inputValueContainer}
                                        whileHover={{
                                            color:"#4E35F2",
                                        }}
                            >
                                <motion.input type="password" placeholder="Введите пароль" className={classes.inputValue}
                                              whileHover={{
                                                  color:"#4E35F2",
                                                  borderColor:"#4E35F2",
                                              }}
                                              whileFocus={{
                                                  scale:1.05,
                                                  color:"#4E35F2",
                                                  borderColor:"#4E35F2",
                                              }}
                                              onDragStart={stopMove}
                                              onMouseLeave={() => {setIsMove(true)}}

                                              {...register("password", {
                                                  required: true,
                                                  minLength: 5,
                                              })}
                                />
                            </motion.div>
                            {errors.password && <span className={classes.errors}>Ошибка в поле</span>}
                            <div className={classes.funcFormBut}>
                                <motion.div className={classes.forgetPassword}
                                            whileHover={{
                                                color:"#75D966",
                                            }}
                                >
                                    Забыли пароль?
                                </motion.div>
                                <Link to="/registration" className={classes.forgetPassword}>
                                    <motion.div
                                        whileHover={{
                                            color:"#75D966",
                                        }}
                                    >
                                        Нет аккаунта?
                                    </motion.div>
                                </Link>
                            </div>
                            <motion.input type="submit" value="Войти" className={classes.submitButton}
                                          whileHover={{
                                              scale:1.05,
                                              backgroundColor:"#4E35F2",
                                          }}
                            />
                        </form>
                    </div>
                </motion.div>
                <motion.div className={classes.textForMove}
                    initial={{
                        scale:0,
                    }}
                    animate={{
                        scale:1,
                    }}
                    transition={{
                        duration:0.3,
                    }}
                >
                    Нервничаешь?<br/>
                    Подвигай окошко авторизации
                </motion.div>
            </div>
            {resultAlert}
        </main>
    );
};

export default Auth;