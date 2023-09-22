import React, {useState} from 'react';
import classes from "./RegistrationStyle.module.css";
import {useForm} from "react-hook-form";
import {motion} from "framer-motion";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, User} from "../../storeRedux/slices/dataWebSlice";
import AlertWindow from "../../components/AlertWindow/AlertWindow";


//#TODO СДЕЛАТЬ ПРОВЕРКУ НА СОВПАДЕНИЯ ПАРОЛЕЙ - ТОЧНЕЕ ЧТОБ ОНА ВЫВОДИЛАСЬ

const Registration = () => {

    const [isOpen, setIsOpen] = useState(0)
    const {register, handleSubmit, reset, formState: {errors}} = useForm()
    const [isMove, setIsMove] = useState(true);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    let users = useSelector((state: any) => state.dataWeb.users)

    const funcSubmit = (data : any) => {
        console.log(data)

        if (data.password === data.passwordRepeat){

            if (users.findIndex((item: User) => item.login === data.login) === -1){
                dispatch(addUser({
                    login: data.login,
                    password: data.password,
                }));
                setIsOpen(1)
                reset()
                setTimeout(() => {
                    navigate("/auth");
                }, 2000)
            }
            else{
                setIsOpen(2)
            }

        }
        else{
            //ничего не должно быть
        }
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

    return (
        <main>
            <div className={classes.mainContainer}>
                <motion.div className={classes.regContainer}
                            initial={{
                                translateX:"200%",
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
                        Регистрация
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
                            <div className={classes.labelForInput}>Повторите пароль</div>
                            <motion.div className={classes.inputValueContainer}
                                        whileHover={{
                                            color:"#4E35F2",
                                        }}
                            >
                                <motion.input type="password" placeholder="Повторите пароль" className={classes.inputValue}
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

                                              {...register("passwordRepeat", {
                                                  required: true,
                                                  minLength: 5,
                                              })}
                                />
                            </motion.div>
                            {errors.passwordRepeat && <span className={classes.errors}>Ошибка в поле</span>}
                            <div className={classes.funcFormBut}>
                                <Link to="/auth" className={classes.forgetPassword}>
                                    <motion.div
                                        whileHover={{
                                            color:"#75D966",
                                        }}
                                    >
                                        Есть аккаунт?
                                    </motion.div>
                                </Link>
                            </div>
                            <motion.input type="submit" value="Зарегистрироваться" className={classes.submitButton}
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
                    Подвигай окошко регистрации
                </motion.div>
            </div>
            {isOpen==1?<AlertWindow data={{
                title:"Поздравляем",
                text:"Вы успешно зарегистрировались, скоро вы будете перенаправлены на страницу авторизации.",
                onClose: () => {setIsOpen(0)},
            }}/>
                :isOpen==2?<AlertWindow data={{
                        title:"Внимание",
                        text:"Подобный логин уже существует.",
                        onClose: () => {setIsOpen(0)},
                }}/>
                    :null
            }
        </main>
    );
};

export default Registration;