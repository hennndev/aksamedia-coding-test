import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { users_login } from '../../data/users'
import { userStore } from '../../store/userStore'
// components
import { LuCircleUserRound, LuLock, LuLockOpen } from "react-icons/lu"

type FormTypes = {
    username: string
    password: string
    rememberMe: boolean
}

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<string | null>(null)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [isFocusUsername, setIsFocusUsername] = useState<boolean>(false)
    const [isFocusPassword, setIsFocusPassword] = useState<boolean>(false)

    const { setUser } = userStore()
    const [, setCookie] = useCookies(['user'])
    const [cookies, setCookieRememberMe, removeCookie] = useCookies(['rememberMe'])

    const { register, handleSubmit, formState: {errors}, setValue } = useForm<FormTypes>({
        defaultValues: {
            username: "",
            password: "",
            rememberMe: false
        }
    })

    const submitHandler = (values: FormTypes) => {
        setIsLoading(true)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const checkUsername = users_login.find(user => user.username === values.username)
                if(!checkUsername) {
                    setIsError("Username tidak ditemukan")
                    reject()
                } else {
                    const checkPassword = checkUsername?.password === values.password
                    if(!checkPassword) {
                        setIsError("Password salah")
                        reject()
                    } else {
                        setIsError(null)
                        setUser({username: checkUsername.username})
                        if(values.rememberMe) {
                            setCookieRememberMe("rememberMe", checkUsername.username, {maxAge: 604800, secure: true})
                        } else {
                            removeCookie("rememberMe")
                        }
                        setCookie("user", checkUsername.id, {maxAge: 3600, secure: true})
                        resolve(true)
                    }
                }
                setIsLoading(false)
            }, 2000)
        })
    }
    const blurUsernameHandler = () => setIsFocusUsername(false)
    const focusUsernameHandler = () => setIsFocusUsername(true)
    const blurPasswordHandler = () => setIsFocusPassword(false)
    const focusPasswordHandler = () => setIsFocusPassword(true)
    const showPasswordHandler = (value: boolean) => setShowPassword(value)

    useEffect(() => {
        if(cookies.rememberMe) {
            setValue("username", cookies.rememberMe)
            setValue("rememberMe", true)
        }
    }, [cookies.rememberMe])
      
    return (
         <form className='flex flex-col mt-7' onSubmit={handleSubmit(submitHandler)}>
                {isError && <p className='mb-3 text-red-500'>{isError}</p>}
                {/* username */}
                <section className='flex flex-col mb-3 space-y-1.5'>
                    <label className='text-primary' htmlFor="username">
                        Username <span className='text-red-500'>*</span>
                    </label>
                    <section className={clsx("flexx border-2 rounded-lg py-2 px-3", isFocusUsername ? "border-2 border-primary" : "border-gray-100")}>
                        <input 
                            type="text" 
                            id='username' 
                            onFocus={focusUsernameHandler}
                            placeholder='Masukan username anda...' 
                            className="text-gray-700 border-none outline-none flex-1 mr-2"
                            {...register("username", {
                                required: "Kolom username harus diisi",
                                onBlur: blurUsernameHandler
                            })}/>    
                        <LuCircleUserRound className='text-lg text-gray-500'/>
                    </section>
                    {errors.username && <p className='text-sm text-red-400'>{errors.username.message}</p>}
                </section>
                {/* password */}
                <section className='flex flex-col mb-3 space-y-1.5'>
                    <label className='text-primary' htmlFor="password">
                        Password <span className='text-red-500'>*</span>
                    </label>
                    <section className={clsx("flexx border-2 rounded-lg py-2 px-3", isFocusPassword ? "border-2 border-primary" : "border-gray-100")}>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            id='password' 
                            onFocus={focusPasswordHandler} 
                            placeholder='Masukan password anda...'
                            className='text-gray-700 border-none outline-none flex-1 mr-2'
                            {...register("password", {
                                required: "Kolom password harus diisi",
                                minLength: {
                                    value: 7,
                                    message: "Minimal panjang password 7 karakter"
                                },
                                onBlur: blurPasswordHandler
                            })}/>    
                        {showPassword ? (
                            <LuLockOpen className='text-lg text-gray-500 cursor-pointer' onClick={() => showPasswordHandler(false)}/>
                        ):(
                            <LuLock className='text-lg text-gray-500 cursor-pointer' onClick={() => showPasswordHandler(true)}/>
                        )}
                    </section>
                    {errors.password && <p className='text-sm text-red-400'>{errors.password.message}</p>}
                </section>
                {/* remember me */}
                <section className='flexx space-x-2 mb-5'>
                    <input 
                        id='rememberMe' 
                        type="checkbox" 
                        className='h-4 w-4'
                        {...register("rememberMe")}/>
                    <label htmlFor="rememberMe" className='text-[15px] text-primary'>Remember me</label>
                </section>
                <button type='submit' className={clsx("py-2.5 px-4 text-white text-center rounded-lg", isLoading ? "bg-gray-400 animate-pulse" : "bg-primary")}>
                    {isLoading ? "Loading..." : "Sign in"}
                </button>
            </form>
    )
}

export default LoginForm