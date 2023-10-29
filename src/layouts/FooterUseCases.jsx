import { Link } from "react-router-dom";

const FooterUseCases = () => {
    return (
        <article className="pl-2 md:ml-4 lg:ml-8 flex flex-col">

            <div className="text-[#c9c9c9] text-[19px] font-[500]">Use Cases</div>
            <div className="w-[35%] h-[1px] my-[6px] bg-[#492f83]"></div>
            <ul className=" mt-3">
                <li><Link>Buy Or Sell $NEI</Link></li>
                <li><Link>Apps & Services</Link></li>
                <li><Link>Validation</Link></li>
            </ul>

        </article>
    );
}

export default FooterUseCases;