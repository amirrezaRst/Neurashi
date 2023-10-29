import FooterUseCases from "./FooterUseCases";
import FooterDevelopers from "./FooterDevelopers";
import FooterLearn from "./FooterLearn";
import FooterInfo from "./FooterInfo";

const Footer = () => {
    return (
        <footer>

            <section className="container text-white grid md:grid-cols-4 gap-5 grid-cols-1 ">
                <FooterInfo />
                <FooterUseCases />
                <FooterDevelopers />
                <FooterLearn />
            </section>

        </footer>
    );
}

export default Footer;