import { Link } from "react-router-dom";

const FooterLearn = () => {
    return (
        <article className="pl-2 flex flex-col">

            <div className="text-[#c9c9c9] text-[19px] font-[500]">Learn</div>
            <div className="w-[35%] h-[1px] my-[6px] bg-[#492f83]"></div>
            <ul className=" mt-3">
                <li><Link>Introduction</Link></li>
                <li><Link>Whitepaper</Link></li>
                <li><Link>Road Map</Link></li>
                <li><Link>Validators</Link></li>
                <li><Link>Partnership</Link></li>
                <li><Link>FAQ</Link></li>
            </ul>

        </article>
    );
}

export default FooterLearn;