const HomeHeader = () => {
    return (
        <header className="home-hero-header container">

            <div className="flex md:flex-row items-center flex-col-reverse" style={{ position: "relative" }}>

                <div className="">
                    <h1>XENO<span>BOT</span></h1>
                    {/* <LogoSvg /> */}

                    <h2 className="text-[#7B59C5] text-[30px] mt-0">Unlocking AI to Crypto</h2>
                    <p className="text-[#a6a6a6] text-[14px]">The AI platform what empowers all your potentials and amplifies your true intelligence!</p>
                    <div className="bg-[#070B0F] py-[10px] pl-[23px] pr-[10px] mt-6 rounded-full flex justify-between items-center">
                        <p className="inline text-[#b1b1b1]">Ask any question about <span className="text-[#7B59C5] ml-2">Emotional</span></p>
                        <button className=" border border-[#503390] text-[#503390] rounded-full px-7 py-2 transition-all hover:text-white hover:bg-[#503390]">Chat Bot <i class="fa-regular fa-comment ml-1"></i></button>
                    </div>
                </div>
                <div className="md:ml-11 home-header-image">
                    <img src="/images/cube2-3d.png" className="md:w-[550px] md:h-[500px] sm:w-[400px] sm:h-[350px] w-[350px] h-[350px]" alt="blockchain" />
                </div>
                <img src="/images/scroll.gif" className="scroll-down-gif lg:inline-block hidden" alt="" />

            </div>

        </header>
    );
}

export default HomeHeader;