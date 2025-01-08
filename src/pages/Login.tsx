import { useState } from 'react'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { LuMail, LuLock, LuLockOpen } from "react-icons/lu"


type FormTypes = {
    email: string
    password: string
    rememberMe: boolean
}

const Login = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isFocusEmail, setIsFocusEmail] = useState<boolean>(false)
    const [isFocusPassword, setIsFocusPassword] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const { register, handleSubmit, formState: {errors} } = useForm<FormTypes>({
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false
        }
    })

    const showPasswordHandler = (value: boolean) => setShowPassword(value)
    const submitHandler = (values: FormTypes) => {
        setIsLoading(true)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        })
    }

    const blurEmailHandler = () => setIsFocusEmail(false)
    const focusEmailHandler = () => setIsFocusEmail(true)

    const blurPasswordHandler = () => setIsFocusPassword(false)
    const focusPasswordHandler = () => setIsFocusPassword(true)

    return (
        <section className="bg-white w-[400px] rounded-2xl shadow-login-box p-10">
            <section className="text-center">
                <h1 className='text-2xl text-primary font-bold tracking-tight'>Selamat datang</h1>
                <p className='text-gray-500 mt-2'>Silahkan isi detailmu untuk login sebagai admin</p>
            </section>
            <form className='flex flex-col mt-7' onSubmit={handleSubmit(submitHandler)}>
                <section className='flex flex-col mb-3 space-y-1.5'>
                    <label className='text-primary' htmlFor="email">E-mail address <span className='text-red-500'>*</span></label>
                    <section className={clsx("flexx border-2 rounded-lg py-2 px-3", isFocusEmail ? "border-2 border-primary" : "border-gray-100")}>
                        <input 
                            type="email" 
                            id='email' 
                            placeholder='Masukan email anda...' 
                            className="text-gray-700 border-none outline-none flex-1 mr-2"
                            onFocus={focusEmailHandler}
                            {...register("email", {
                                required: "Kolom email harus diisi",
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Email tidak valid"
                                },
                                onBlur: blurEmailHandler
                            })}/>    
                        <LuMail className='text-lg text-gray-500'/>
                    </section>
                    {errors.email && <p className='text-sm text-red-400'>{errors.email.message}</p>}
                </section>
                <section className='flex flex-col mb-3 space-y-1.5'>
                    <label className='text-primary' htmlFor="password">Password <span className='text-red-500'>*</span></label>
                    <section className={clsx("flexx border-2 rounded-lg py-2 px-3", isFocusPassword ? "border-2 border-primary" : "border-gray-100")}>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            id='password' 
                            placeholder='Masukan password anda...'
                            onFocus={focusPasswordHandler} 
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
        </section>
    )
}

export default Login