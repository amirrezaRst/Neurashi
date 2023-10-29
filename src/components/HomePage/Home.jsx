import { Link } from "react-router-dom";





const Home = () => {
    return (
        <footer className="bg-[#090C0F] mt-[100px] py-[55px]">

            <section className="container text-white grid md:grid-cols-4 gap-5 grid-cols-1 ">
                <article className="text-center">
                    <img src="/images/logo-w-1.png" className="md:w-[90%] w-[40%] block mx-auto" alt="neurashi" />
                    <p className="text-[#cecece] text-[14px] mt-4">
                        The AI platform what empowers all your potentials and amplifies your true intelligence!
                    </p>
                    <div className="footer-social-content">
                        <div className="footer-social-items"><Link><i className="fab fa-github"></i></Link></div>
                        <div className="footer-social-items"><Link><i className="fab fa-twitter"></i></Link></div>
                        <div className="footer-social-items"><Link><i className="fab fa-telegram"></i></Link></div>
                        <div className="footer-social-items"><Link><i className="fab fa-instagram"></i></Link></div>
                        <div className="footer-social-items"><Link><i className="fab fa-linkedin"></i></Link></div>
                        <div className="footer-social-items"><Link><i className="fab fa-medium"></i></Link></div>
                        <div className="footer-social-items"><Link><i className="fab fa-youtube"></i></Link></div>
                        <div className="footer-social-items"><Link><i className="fab fa-reddit"></i></Link></div>
                        <div className="footer-social-items"><Link><i className="fab fa-tiktok"></i></Link></div>
                    </div>
                </article>
                <article className="pl-3 flex flex-col">

                    <div className="text-[#c9c9c9] text-[19px] font-[500]">Use Cases</div>
                    <div className="w-[35%] h-[1px] my-[6px] bg-[#492f83]"></div>
                    <ul className=" mt-3">
                        <li><Link>Buy Or Sell $NEI</Link></li>
                        <li><Link>Apps & Services</Link></li>
                        <li><Link>Validation</Link></li>
                    </ul>

                </article>
                <article className="pl-2 flex flex-col">

                    <div className="text-[#c9c9c9] text-[19px] font-[500]">Developers</div>
                    <div className="w-[35%] h-[1px] my-[6px] bg-[#492f83]"></div>
                    <ul className=" mt-3">
                        <li><Link>Docs</Link></li>
                        <li><Link>Audits</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>

                </article>
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
            </section>

        </footer>
    );
}

export default Home;