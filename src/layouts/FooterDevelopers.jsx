import { Link } from "react-router-dom";

const FooterDevelopers = () => {
    return (
        <article className="pl-2 flex flex-col">

            <div className="text-[#c9c9c9] text-[19px] font-[500]">Developers</div>
            <div className="w-[35%] h-[1px] my-[6px] bg-[#492f83]"></div>
            <ul className=" mt-3">
                <li><Link>Docs</Link></li>
                <li><Link>Audits</Link></li>
                <li><Link>Blog</Link></li>
            </ul>

        </article>
    );
}

export default FooterDevelopers;