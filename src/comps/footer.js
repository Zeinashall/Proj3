const Footer = () => {
    return (  
      <footer>
      <div class="container">
        <div class="footer-container">
          <a href="#" class="footer-item">
            <i class="fas fa-map-marker-alt footer-icon location-icon"></i>
            <span>Geesthachter Straße 136 C, 21502, Deutschland</span>
          </a>
          <a class="footer-item">
            <i class="fas fa-phone footer-icon phone-icon"></i>
            <span>+49 176-83635728</span>
          </a>
          <a class="footer-item">
            <i class="fas fa-envelope footer-icon email-icon"></i>
            <span>zeinaalshal@gmail.com</span>
          </a>
          <div class="footer-credit">
            <span>Designed by Zeina Alshall</span>
          </div>
        </div>
      </div>
    </footer>
    );
}
 
export default Footer;