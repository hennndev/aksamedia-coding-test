import clsx from "clsx"
// components
import ModalBackdrop from "./ModalBackdrop"

type PropsTypes = {
    modalType?: "delete" | "edit"
    modalTitle: string
    closeHandler: () => void
    submitHandler?: () => void
}

const ModalConfirm = ({modalTitle, modalType, closeHandler, submitHandler}: PropsTypes) => {
    return (
        <ModalBackdrop>
            <section className='bg-white w-[450px] rounded-lg p-8'>
                <h1 className='text-lg text-primary'>{modalTitle}</h1>
                <section className='flexx space-x-2 mt-5'>
                    <button className='border-none outline-none rounded-md bg-gray-500 py-2 px-4 text-white hover:opacity-90' onClick={closeHandler}>Close</button>
                    {modalType && (
                        <button className={clsx("border-none outline-none rounded-md py-2 px-4 text-white hover:opacity-90", modalType === "delete" ? "bg-red-500" : "bg-primary")} onClick={submitHandler}>
                            {modalType === "delete" ? "Delete" : "Submit"}
                        </button>
                    )}
                </section>
            </section>
        </ModalBackdrop>
    )
}

export default ModalConfirm