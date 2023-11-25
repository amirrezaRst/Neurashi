import { motion } from "framer-motion";
import { useState } from "react";


const TopBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // const variant = {
    //     hidden: { opacity: 0 },
    //     visible: { opacity: 1 }
    // }

    return (
        <div className="w-full h-[100vh]">
            <button
                className="border border-indigo-600 rounded-md px-5 py-1 m-12 text-indigo-600 hover:text-white hover:bg-indigo-600 transition-all"
                onClick={() => setIsOpen(!isOpen)}
            >
                Open
            </button>
        </div>
    );
}

export default TopBar;