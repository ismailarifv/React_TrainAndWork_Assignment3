function Footer() {
  return (
    <footer style={{"backgroundColor":"#15161e"}}>
  <div className="newsletter-area bg-black pt-64 pb-64 pt-sm-56 pb-sm-58">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="newsletter-inner white-bg">
            <div className="newsletter-title">
              <h3>newsletter signup</h3>
            </div>
            <div className="newsletter-box">
              <form id="mc-form">
                <input type="email" id="mc-email" autoComplete="off" placeholder="Your Email address" />
                <button className="newsletter-btn hm_5" id="mc-submit"><i className="ion-android-send" /></button>
              </form>
            </div>
          </div>
          <div className="mailchimp-alerts">
            <div className="mailchimp-submitting" />
            <div className="mailchimp-success" />
            <div className="mailchimp-error" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 ms-auto">
          <div className="social-share-area white-bg">
            <h3> follow us</h3>
            <div className="social-icon">
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-rss" /></a>
              <a href="#"><i className="fa fa-youtube" /></a>
              <a href="#"><i className="fa fa-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-widget-area white-bg pt-62 pb-56 pb-md-26 pt-sm-56 pb-sm-20">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="footer-widget">
            <div className="footer-widget-title">
              <h3>shipping and delivery</h3>
            </div>
            <div className="footer-widget-body">
              <p>Here you can read some details about a nifty little lifecycle of your orders journey from the time you place your order to your new treasures arriving at your doorstep.</p>
            </div>
            <div className="footer-widget-title mt-20">
              <h3>payment method</h3>
            </div>
            <div className="footer-widget-body">
              <p>It is equally important to choose the solution which offers a specific selection of credit cards. We take Visa &amp; MasterCard as they are widely used by cyber customers.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="footer-widget">
            <div className="footer-widget-title">
              <h3>useful link</h3>
            </div>
            <div className="footer-widget-body">
              <ul className="useful-link">
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Legal Notice</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">New products</a></li>
                <li><a href="#">best sales</a></li>
                <li><a href="#">wishlist</a></li>
                <li><a href="#">my account</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="footer-widget">
            <div className="footer-widget-title">
              <h3>our company</h3>
            </div>
            <div className="footer-widget-body">
              <ul className="useful-link">
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Legal Notice</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">secure payment</a></li>
                <li><a href="#">contact us</a></li>
                <li><a href="#">site map</a></li>
                <li><a href="#">login</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="footer-widget">
            <div className="footer-widget-title">
              <div className="footer-logo">
                <a href="index-5.html">
                  <img src="src/assets/img/logo/logo_5.png" alt="" />
                </a>
              </div>
            </div>
            <div className="footer-widget-body">
              <ul className="address-box">
                <li>
                  <span>ADDRESS:</span>
                  <p>Melani - Responsive Prestashop Theme<br />
                    169-C, Technohub, Dubai Silicon</p>
                </li>
                <li>
                  <span>call us now:</span>
                  <p>+880123456789</p>
                </li>
                <li>
                  <span>email:</span>
                  <p><a href="#">demo@yourdomain.com</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom-area">
    <div className="container">
      <div className="bdr-top-2 pt-18 pb-18">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <div className="copyright-text white-bg">
              <p>© <b>Melani</b> Made with <i className="fa fa-heart text-danger" /> by <a href="https://hasthemes.com/"><b>HasThemes</b></a></p>
            </div>
          </div>
          <div className="col-md-6 ms-auto order-1 order-md-2">
            <div className="footer-payment">
              <img src="src/assets/img/payment.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
