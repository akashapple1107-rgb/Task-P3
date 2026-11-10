import Icon from './Icon'

export default function Footer() {
  return <footer className="footer">
    <div className="footer-content">
      <div><h3>Explore</h3><p><a href="/">Home</a></p><p><a href="#">Questions</a></p><p><a href="/#articles">Articles</a></p><p><a href="/#tutorials">Tutorials</a></p></div>
      <div><h3>Support</h3><p>FAQs</p><p>Help</p><p>Contact Us</p></div>
      <div><h3>Stay connected</h3><div className="social-icons" aria-label="Social media"><span role="img" aria-label="Facebook"><Icon name="facebook" /></span><span role="img" aria-label="Twitter"><Icon name="twitter" /></span><span role="img" aria-label="Instagram"><Icon name="instagram" /></span></div></div>
    </div>
    <div className="footer-bottom"><h2>DEV@Deakin 2026</h2><div className="footer-policies"><span>Privacy Policy</span><span>Terms</span><span>Code of Conduct</span></div></div>
  </footer>
}

