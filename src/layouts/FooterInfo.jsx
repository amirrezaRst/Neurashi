import SocialLink from "./SocialLink";

const FooterInfo = () => {
    return (
        <article className="text-center">
            <img src="/images/logo-w-1.png" className="md:w-[90%] w-[40%] block mx-auto" alt="neurashi" />
            <p className="text-[#cecece] text-[14px] mt-4">
                The AI platform what empowers all your potentials and amplifies your true intelligence!
            </p>
            <SocialLink />
        </article>
    );
}

export default FooterInfo;