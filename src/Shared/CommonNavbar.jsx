import logo from "../assets/logo.png"

function CommonNavbar() {
    return (
        <nav className='w-full mx-auto bg-[#95EFFE] px-10 py-4'>
            <div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-5 justify-between items-center'>
                
                {/* logo text */}
                <div className="mx-auto max-w-[1000px] space-y-4">
                    <h1 className='text-[32px] font-bold text-center'>ئەسسالامۇئەلەيكۇم، ئۇيغۇر بالىلار تېپىشماقلىرى توربېتىگە خۇش كەلدىڭىز!</h1>
                </div>
                {/* logo */}
                <img src={logo} alt="" className='h-32' />
            </div>
        </nav>
    )
}
export default CommonNavbar