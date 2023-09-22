import { motion } from 'framer-motion';
import React, {useRef} from 'react';
import { useForm } from 'react-hook-form';
import classes from "./auth.module.css"
import {useDispatch, useSelector} from "react-redux";
import {toggleIsMove} from "../../storeRedux/slices/authSlice";
import {Simulate} from "react-dom/test-utils";
import drag = Simulate.drag;


const Auth = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const dispatch = useDispatch()
    let isMove : boolean = useSelector((state : any) => state.dataAuth.isMove)


    const funcSubmit = (data : any) => {
        console.log(data)
    }

    const stopMove = () => {
        dispatch(toggleIsMove())
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
                                left:-50,
                                right:50,
                                top:-10,
                                bottom:50,
                            }}
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
                                              onMouseEnter={stopMove}
                                              onMouseLeave={stopMove}
                                              {...register("login", {
                                                  required: true,
                                              })}
                                />
                            </motion.div>
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
                                              onMouseEnter={stopMove}
                                              onMouseLeave={stopMove}
                                              {...register("password", {
                                                  required: true,
                                              })}
                                />
                            </motion.div>
                            <div className={classes.funcFormBut}>
                                <motion.div className={classes.forgetPassword}
                                            whileHover={{
                                                color:"#75D966",
                                            }}
                                >
                                    Забыли пароль?
                                </motion.div>
                                <motion.div className={classes.forgetPassword}
                                            whileHover={{
                                                color:"#75D966",
                                            }}
                                >
                                    Нет аккаунта?
                                </motion.div>
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
        </main>
    );
};

export default Auth;