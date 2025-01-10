import { userStore } from "../../store/userStore"
// components
import ModalBackdrop from "./ModalBackdrop"

type PropsTypes = {
    closeHandler: () => void
}

const ModalProfile = ({closeHandler}: PropsTypes) => {
    const { user } = userStore()
    return (
        <ModalBackdrop>
            <section className='bg-white w-[450px] rounded-lg p-8'>
                <h1 className='text-lg text-primary'>My Profile</h1>
                <p className='text-primary font-semibold mt-3'>Username: {user?.username}</p>
                <section className='flexx space-x-2 mt-5'>
                    <button className='border-none outline-none rounded-md bg-gray-500 py-2 px-4 text-white hover:opacity-90' onClick={closeHandler}>Close</button>
                </section>
            </section>
        </ModalBackdrop>
    )
}

export default ModalProfile