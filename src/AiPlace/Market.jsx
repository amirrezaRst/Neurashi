import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Market = () => {
    const [layout, setLayout] = useState("col");

    // console.log(object);
    return (
        <div className="container">

            <div className="market-container grid grid-cols-6 gap-8">

                <div className="market-item md:col-span-2 sm:col-span-6 col-span-6 flex md:flex-col flex-row">
                    <div className="flex">
                        <img src="/images/midjourney.jpeg" alt="" />
                    </div>
                    <div className="md:ml-0 md:pt-2 pt-0 ml-4 w-[100%]">
                        <h2>Midjourney</h2>
                        <p className="line-clamp-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil totam similique sint vel facere
                        </p>
                        <div className="flex items-center justify-between mt-3">
                            <span className="text-[1.3rem] font-[500]">13$</span>
                            <span className="text-[1.2rem] font-[500]"><i class="fa-solid fa-star"></i> 3</span>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
}

export default Market;