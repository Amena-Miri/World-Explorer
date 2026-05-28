import Link from "next/link";
import { FaGithub, FaTelegram, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <svg className="footer-brand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="footer-brand-text">World Explorer</span>
            </div>
            <p className="footer-description">Discover countries around the world.</p>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/countries" className="footer-link">Countries</Link></li>
              <li><Link href="/search" className="footer-link">Search</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="https://restcountries.com" className="footer-link" target="_blank">REST Countries API</a></li>
            </ul>
          </div>
          <div>
          <h4 className="footer-title">Connect</h4>
          <div className="social-links">
            <a href="https://github.com/Amena-Miri" className="social-link" target="_blank">
              <FaGithub size={20} />
            </a>

            <a href="https://t.me/amena_miri" className="social-link" target="_blank">
              <FaTelegram size={20} />
            </a>

            <a href="https://www.linkedin.com/in/amena-miri-80013b36b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="social-link" target="_blank">
              <FaLinkedin size={20} />
            </a>

            <a href="https://www.instagram.com/amntech_?igsh=MXF2Njg2ZDZiMWZsag%3D%3D&utm_source=qr" className="social-link" target="_blank">
              <FaInstagram size={20} />
            </a>

            <a href="https://x.com/amena_miri?s=21" className="social-link" target="_blank">
              <FaXTwitter size={20} />
            </a>

          </div>
        </div>
        </div>
        <div className="footer-bottom">
          <p>Made by <span className="footer-author">Amena Miri</span> for educational purposes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;