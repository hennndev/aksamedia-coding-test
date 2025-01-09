import clsx from "clsx"

type PropsTypes = {
    modalType?: "delete" | "edit"
    modalTitle: string
    closeHandler: () => void
    submitHandler?: () => void
}

const ModalConfirm = ({modalTitle, modalType, closeHandler, submitHandler}: PropsTypes) => {
    return (
        <section className='fixed z-[999] top-0 right-0 left-0 bottom-0 w-full h-full bg-[rgba(0,0,0,0.3)]'>
            <section className='w-full h-full flex-center'>
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
            </section>
        </section>
    )
}

export default ModalConfirm