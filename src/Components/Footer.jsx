import email from "../assets/email.png"

const Footer = () => {
    return (

        <footer className="flex flex-col justify-around gap-5 bg-[#95EFFE] py-8 p-4">
            <aside className="flex flex-col items-center justify-center gap-1 text-xl text-center">
                <p>قولىڭىزدا تور بېكىتىمىزدە يوق تېپىشماقلار بولسا، بىزگە ئېلخەت ئارقىلىق ئەۋەتىپ بېرىڭ.</p>
            </aside>
            <nav className="text-lg mx-auto">
                <h1> «تامار - تامار كۆل بولار»</h1>
            </nav>
            <aside className="text-center flex justify-center text-sm">
                <img src={email} alt=""  className='w-[48px]  h-[48px]'/>
            </aside>
        </footer>

    )
}

export default Footer