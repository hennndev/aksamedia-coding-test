type PropsTypes = {
    children: React.ReactNode
}

const ModalBackdrop = ({children}: PropsTypes) => {
    return (
        <section className='fixed z-[999] top-0 right-0 left-0 bottom-0 w-full h-full bg-[rgba(0,0,0,0.5)]'>
            <section className='w-full h-full flex-center'>
                {children}
            </section>
        </section>
    )
}

export default ModalBackdrop