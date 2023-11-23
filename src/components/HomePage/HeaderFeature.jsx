const HeaderFeature = () => {
    return (
        <div className="home-feature lg:mt-[5.5rem] sm:mt-[3rem] mt-[2rem] mb-10 lg:grid-cols-3 md:grid-cols-2">
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
    );
}

export default HeaderFeature;