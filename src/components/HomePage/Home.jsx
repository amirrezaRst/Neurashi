import { Link } from "react-router-dom";
import LogoSvg from "./LogoSvg";
import HomeHeader from "./HomeHeader";
import HomeChart from "./HomeChart";





const Home = () => {
    return (
        <main className="home-content">

            <HomeHeader />

            {/* <HomeChart /> */}

            {/* <section id="home-reporter-container" className="relative pt-[100px]">
                               <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0" viewBox="0 0 1440 320"><path fill="#0E1116" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,96C672,139,768,213,864,250.7C960,288,1056,288,1152,266.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-0 md:gap-2 relative">
                    <div className="info-section px-8 py-8 md:px-8 md:mt-0 mt-1">
                        <h2 className="mb-6">World news analysis</h2>
                        <div className="">
                            <p className="mb-4">
                                It is a type of artificial intelligence that is focused on the world of news and current events. Informs users about airdrops,
                                ICOs, events and news. In addition, in more advanced versions, it can predict the future with 70% accuracy of interpretation and
                                strategy of countries.
                            </p>
                            <button className="rounded-full">Get Started</button>

                        </div>

                    </div>
                    <div className="relative text-center md:text-left">
                        <img src="/images/reporter.png" className="lg:w-[80%] md:w-[90%] sm:w-[60%] w-[85%] inline md:absolute bottom-0" alt="market analysis with ai" />
                    </div>
                </div>
            </section> */}


            <section id="home-services-container">

                <div className="container">

                    <h3>Apps & Services</h3>

                    <div className="gap-x-7 gap-y-6 home-services-content">

                        <div className="services-items col-span-2 lg:col-span-1 sm:flex-row  flex-col-reverse hover:ring-[1.5px] ring-[#2d3036]">
                            <div>
                                <h2 className="mb-3 mt-1 lg:mt-3">AI Chat Bot</h2>
                                <p>
                                    Neurashi AI Chabot, is a computer program or application that uses artificial intelligence (AI) and natural language
                                    processing (NLP) techniques to engage in text or voice-based conversations with users.
                                </p>
                            </div>
                            <img src="/images/lightbulb.png" className="sm:inline hidden" alt="" />
                        </div>
                        <div className="services-items col-span-2 lg:col-span-1 sm:flex-row  flex-col-reverse hover:ring-[1.5px] ring-[#2d3036]">
                            <div>
                                <h2 className="mb-3 mt-1 lg:mt-3">Chart Mind</h2>
                                <p>
                                    hartMind is a state-of-the-art MultiModal AI system designed to interpret and analyze images, with a special focus
                                    on market charts.
                                </p>
                            </div>
                            <img src="/images/star.png" className="sm:inline hidden" alt="" />
                        </div>
                        <div className="services-items col-span-2 sm:flex-row flex-col-reverse hover:ring-[1.5px] ring-[#2d3036]">
                            <div>
                                <p className="badge-purple mt-5 lg:mt-0">Conversational Interactive Language Model</p>
                                <h2 className="mb-3 mt-1 lg:mt-3">CILM</h2>
                                <p>
                                    is a versatile conversational AI, akin to ChatGPT, designed for general-purpose dialogues, offering responses that are
                                    contextually relevant and accurate.
                                </p>
                            </div>
                            <img src="/images/lightning.png" className="sm:inline hidden" alt="" />
                        </div>
                        <div className="services-items col-span-2 lg:col-span-1 sm:flex-row  flex-col-reverse hover:ring-[1.5px] ring-[#2d3036]">
                            <div>
                                <p className="badge-purple mt-5 lg:mt-0">Blockchain Conversational Interactive Language Model</p>
                                <h2 className="mb-3 mt-1 lg:mt-3">BCILM</h2>
                                <p>
                                    is a CILM variant focused on the cryptocurrency world. It informs users about airdrops, ICOs, events, and news. Additionally,
                                    it can interpret whitepapers and, in its advanced version, recommends trading strategies tailored to the crypto universe.
                                </p>
                            </div>
                            <img src="/images/shield-1.png" className="sm:inline hidden" alt="" />
                        </div>
                        <div className="services-items col-span-2 lg:col-span-1 sm:flex-row  flex-col-reverse hover:ring-[1.5px] ring-[#2d3036]">
                            <div>
                                <p className="badge-purple mt-5 lg:mt-0">Trading Visual Analyst</p>
                                <h2 className="mb-3 mt-1 lg:mt-3">TVA</h2>
                                <p>
                                    is a cutting-edge fusion of the capabilities offered by CILM and ChartMind. Positioned at the forefront of trading analytics,
                                    TVA is tailored to revolutionize the way users interpret and respond to market charts. Instead of relying on static
                                    interpretations, users can interact with TVA by posing specific questions about their desired cryptocurrency symbol.
                                </p>
                            </div>
                            <img src="/images/fire.png" className="sm:inline hidden" alt="" />
                        </div>
                    </div>

                </div>

            </section>

        </main>
    );
}

export default Home;