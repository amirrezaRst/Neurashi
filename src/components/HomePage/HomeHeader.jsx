import { Fragment } from "react";
import HeaderFeature from "./HeaderFeature";

const HomeHeader = () => {
    return (
        <Fragment>
            <header className="home-hero-header">
                <video autoPlay muted loop>
                    <source src="/images/videos/background-video2.mp4" type="video/mp4" />
                </video>
                {/* <div className="filter-pattern grid grid-cols-5"> */}
                <div className="filter-pattern relative">

                    {/* <div className="container lg:pt-[27vh] md:pt-[23.5vh] sm:pt-[15vh] pt-[14vh] col-span-4" style={{backgroundColor:"rgba(255, 255, 255, 0.038)"}}> */}
                    <div className="container lg:pt-[27vh] md:pt-[23.5vh] sm:pt-[15vh] pt-[14vh] col-span-4">
                        <div className="text-center">
                            <h2>Image NFT Generator</h2>
                            <h3>generate a short, brandable business name using artificial intelligence</h3>
                            <div className="mt-6 relative">
                                <div className="header-inbox sm:inline">
                                    <input type="text" className="lg:w-[40%] md:w-[50%] sm:w-[60%] w-[67%]" placeholder="Type something ...." />
                                    <button className="hidden sm:inline">Generate</button>
                                </div>
                                <button className="inline sm:hidden">Generate</button>
                            </div>
                        </div>
                        <HeaderFeature />
                    </div>
                    {/* <div style={{ backgroundColor: "rgba(255, 255, 255, 0.078)" }}> */}
                    <img src="/images/cube-3d.png" className="absolute w-[80%]" alt="" />
                    {/* </div> */}


                    <div className="bottom-pattern"></div>
                </div>

            </header>
        </Fragment>

    );
}

export default HomeHeader;