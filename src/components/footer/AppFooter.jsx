import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Column 1 */}
        <div className="footer__col">
          <h2 className="footer__logo">ON Creative Studio</h2>
          <p className="footer__desc">
            ON Creative Studio is a web development team founded by 
            Otabek and Nursultan. We build modern, responsive and 
            performance-driven web applications with clean design.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer__col">
          <h3>Contact</h3>
          <p>Email: Nursultanyaxmudov6@gmail.com</p>
          <p>Email: Otabekoff@gmail.com</p>
          <p>Phone: +998 33 007 33 37</p>
          <p>Phone: +998 33 371 50 51</p>
          <p>Location: Tashkent, Uzbekistan</p>
        </div>

        {/* Column 3 */}
        <div className="footer__col">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="footer__socials">
          <span>f</span>
          <span>t</span>
          <span>G</span>
          <span>in</span>
        </div>

        <p>© 2026 ON Creative Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}