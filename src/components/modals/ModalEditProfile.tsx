import { useState, useEffect } from "react"
import clsx from "clsx"
import { useForm } from "react-hook-form"
import { userStore } from "../../store/userStore"
// components
import ModalBackdrop from "./ModalBackdrop"

type PropsTypes = {
    closeHandler: () => void
}

type FormTypes = {
    username: string
}

const ModalEditProfile = ({closeHandler}: PropsTypes) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { register, formState: {errors}, handleSubmit, setValue } = useForm<FormTypes>({
        defaultValues: {
            username: ""
        }
    })
    const { user, setUser } = userStore()

    const submitHandler = (values: FormTypes) => {
        setIsLoading(true)
        return new Promise((resolve) => {
            setTimeout(() => {
                setUser({
                    username: values.username
                })
                setIsLoading(false)
                resolve(true)
                closeHandler()
            }, 200);
        })
    }

    useEffect(() => {
        if(user?.username) {
            setValue("username", user.username)
        }
    }, [user?.username])
    
    return (
        <ModalBackdrop>
            <section className='bg-white dark:bg-primary w-[450px] rounded-lg p-8'>
                <h1 className='text-lg text-primary dark:text-gray-100'>Edit Profile</h1>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <section className="w-full mt-3">
                        <input 
                            type="text"
                            id='username'
                            disabled={isLoading}
                            {...register("username", {
                                required: "Username tidak boleh kosong"
                            })}
                            placeholder='Tulis username disini...' 
                            className='border border-[#ccc] dark:border-gray-600 bg-transparent w-full rounded-md py-2.5 px-4 outline-none dark:text-gray-100'/>
                        {errors.username && <p className='text-red-400 text-sm'>{errors.username.message}</p>}
                    </section>
                    <section className='flexx space-x-2 mt-5'>
                        <button 
                            type="button" 
                            disabled={isLoading}
                            className='border-none outline-none rounded-md bg-gray-500 dark:bg-gray-600 py-2 px-4 text-white hover:opacity-90' onClick={closeHandler}>Close</button>
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className={clsx("border-none outline-none rounded-md py-2 px-4 text-white hover:opacity-90", isLoading ? "bg-gray-400 dark:bg-gray-500" : "bg-primary dark:bg-[#222]")}>
                            {isLoading ? "Loading..." : "Submit"}
                        </button>
                    </section>
                </form>
            </section>
        </ModalBackdrop>
    )
}

export default ModalEditProfile