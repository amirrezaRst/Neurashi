import { Link } from "react-router-dom";

const SocialLink = () => {
    return (
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
    );
}

export default SocialLink;