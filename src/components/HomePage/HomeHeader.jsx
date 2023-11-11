import { Fragment } from "react";

const HomeHeader = () => {
    return (
        <Fragment>
            <header className="home-hero-header">
                <div className="filter-pattern">


                    {/* <div className="container lg:pt-[220px] md:pt-[180px] sm:pt-[7rem] pt-[5.5rem] xl:bg-orange-300 lg:bg-teal-300 md:bg-slate-50 sm:bg-rose-400 bg-none"> */}
                    <div className="container lg:pt-[220px] md:pt-[180px] sm:pt-[7rem] pt-[5.5rem]">
                        <div className="text-center">
                            <h2>Image NFT Generator</h2>
                            <h3>generate a short, brandable business name using artificial intelligence</h3>
                            <div className="mt-6">
                                <div className="input-box">
                                    <input type="text" className="lg:w-[40%] md:w-[50%] sm:w-[60%] w-[67%]" placeholder="Type something ...." />
                                    <div>
                                        <span>
                                            <button>Generate</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="home-feature lg:grid-cols-3 md:grid-cols-2 divide-x divide-[#bebebe49]"> */}
                        <div className="home-feature lg:mt-[5.5rem] sm:mt-[3rem] mt-[2rem] mb-10 lg:grid-cols-3 md:grid-cols-2 md:divide-x md:divide-y-0 divide-y divide-[#bebebe38]">
                            <div className="feature-item lg:mb-0 mb-4 md:pt-2 pt-4">
                                <div>
                                    <i class="fal fa-hexagon-vertical-nft text-[1.7rem]"></i>
                                </div>
                                <div className="info">
                                    <h3>Made NFT</h3>
                                    <p>
                                        
                                        Namelix generates short, catchy names with a state of the art language model
                                    </p>
                                </div>
                            </div>
                            <div className="feature-item lg:mb-0 mb-4 md:pt-2 pt-4">
                                <div>
                                    <i class="fal fa-dollar-sign text-[1.7rem]"></i>
                                </div>
                                <div className="info">
                                    <h3>Fast sale of NFT</h3>
                                    <p>
                                        Decide whether you prioritize a shorter name, having a specific keyword or domain extension
                                    </p>
                                </div>
                            </div>
                            <div className="feature-item lg:mb-0 mb-4 md:pt-2 pt-4">
                                <div>
                                    <i class="fal fa-heart text-[1.5rem]"></i>
                                </div>
                                <div className="info">
                                    <h3>Save your NFT</h3>
                                    <p>
                                        Our algorithm learns from the names you like, giving you better recommendations over time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bottom-pattern"></div>
                </div>

            </header>
        </Fragment>

    );
}

export default HomeHeader;