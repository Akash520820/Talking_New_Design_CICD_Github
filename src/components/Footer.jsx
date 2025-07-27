import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
  return(
    <>
    <footer className="footer" role="contentinfo" aria-label="Site footer">
        <div className="container CN">
            <div className="row">
                {/* About Section */}
                <div className="col-lg-3 col-md-6 footer-section">
                    <h6 id="about-heading">About</h6>
                    <nav aria-labelledby="about-heading">
                        <ul className="footer-links">
                            <li><a href="#" aria-label="Learn more about us">About us</a></li>
                            <li><a href="#" aria-label="View available career opportunities">Careers</a></li>
                            <li><a href="#" aria-label="Get in touch with us">Contact us</a></li>
                            <li><a href="#" aria-label="Read our latest blog posts">Blog</a></li>
                            <li><a href="#" aria-label="Information for investors">Investors</a></li>
                        </ul>
                    </nav>
                </div>
                
                {/* Discover Udemy Section */}
                <div className="col-lg-3 col-md-6 footer-section">
                    <h6 id="discover-heading">Discover Udemy</h6>
                    <nav aria-labelledby="discover-heading">
                        <ul className="footer-links">
                            <li><a href="#" aria-label="Download the Udemy mobile app">Get the app</a></li>
                            <li><a href="#" aria-label="Start teaching courses on Udemy">Teach on Udemy</a></li>
                            <li><a href="#" aria-label="View our subscription plans and pricing">Plans and Pricing</a></li>
                            <li><a href="#" aria-label="Join our affiliate program">Affiliate</a></li>
                            <li><a href="#" aria-label="Get help and customer support">Help and Support</a></li>
                        </ul>
                    </nav>
                </div>
                
                {/* Udemy for Business Section */}
                <div className="col-lg-3 col-md-6 footer-section">
                    <h6 id="business-heading">Udemy for Business</h6>
                    <nav aria-labelledby="business-heading">
                        <ul className="footer-links">
                            <li><a href="#" aria-label="Explore Udemy Business solutions for organizations">Udemy Business</a></li>
                        </ul>
                    </nav>
                </div>
                
                {/* Legal & Accessibility Section */}
                <div className="col-lg-3 col-md-6 footer-section">
                    <h6 id="legal-heading">Legal & Accessibility</h6>
                    <nav aria-labelledby="legal-heading">
                        <ul className="footer-links">
                            <li><a href="#" aria-label="Read our accessibility statement">Accessibility statement</a></li>
                            <li><a href="#" aria-label="View our privacy policy">Privacy policy</a></li>
                            <li><a href="#" aria-label="Browse our sitemap">Sitemap</a></li>
                            <li><a href="#" aria-label="Read our terms of service">Terms</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="footer-logo" role="img" aria-label="Udemy logo">
                            <span>udemy</span>
                        </div>
                        <p className="copyright-text">© 2025 Udemy, Inc.</p>
                    </div>
                    <div className="col-md-3">
                        <a href="#" className="cookie-settings" aria-label="Manage cookie preferences">
                            Cookie settings
                        </a>
                    </div>
                    <div className="col-md-3 text-md-end">
                        <button 
                            className="language-selector" 
                            aria-label="Select language, currently English"
                            aria-expanded="false"
                            aria-haspopup="true"
                            type="button"
                        >
                            <i className="fas fa-globe" aria-hidden="true"></i>
                            <span>English</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
 }
 export default Footer;