const HomeChart = () => {
    return (
        <section id="home-chart-container">
            <div className="grid md:grid-cols-2 grid-cols-1  gap-8">
                <div className="">
                    <img src="/images/home-chart.png" className="md:w-full sm:w-[80%] w-full mx-auto" alt="market analysis with ai" />
                </div>
                <div className="info-section px-8 md:px-1 md:mt-0 mt-1">
                    <h2 className="mb-6">Chart analysis with AI</h2>
                    <div className="pr-8 w-[65%] lg:w-[80%] w-full">
                        <p className="mb-4">
                            HartMind is a state-of-the-art MultiModal AI system designed to interpret and analyze images, with a special focus
                            on market charts.
                        </p>
                        <button className="rounded-full">Get Started</button>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default HomeChart;