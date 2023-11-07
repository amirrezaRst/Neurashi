import { useState } from "react";
import StyleCustom from "./StyleCustom";
import CustomizeNav from "./CustomizeNav";
import RandomCustom from "./RandomCustom";

const Customize = () => {
    const [page, setPage] = useState("style");

    //! options state
    const [styles, setStyle] = useState("Auto");
    const [random, setRandom] = useState("Low");
    // const [info, setInfo] = useState("Low");


    const handlePage = (val) => {
        setPage(val);
    }

    return (
        <main className="customize-container">

            <div className="container">

                <div className="customize-content w-[60%] mx-auto">

                    <CustomizeNav page={page} change={handlePage} />
                    <div>
                        <h3>Select a picture style</h3>

                        {page == "style" ?
                            <StyleCustom option={styles} setOption={setStyle} handlePage={handlePage} /> :
                            page == "random" ?
                                <RandomCustom option={random} setOption={setRandom} handlePage={handlePage} /> : null
                        }

                    </div>

                </div>

            </div>

        </main>
    );
}

export default Customize;