

function Contact() {
  return (
    <div className="contact-top-area pt-100 pb-98 pt-sm-58 pb-sm-58" style={{backgroundColor:"white"}}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-title text-center pb-44">
          <p>contact us</p>
          <h2>connect with us</h2>
        </div>
      </div>
    </div> 
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="contact-single-info mb-30 text-center">
          <div className="contact-icon">
            <i className="fa fa-map-marker" />
          </div>
          <h3>address street</h3>
          <p>Address : No 40 Baria Sreet<br />NewYork City, United States.</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="contact-single-info mb-30 text-center">
          <div className="contact-icon">
            <i className="fa fa-phone" />
          </div>
          <h3>number phone</h3>
          <p>Phone 1: 0(1234) 567 89012<br />Phone 2: 0(987) 567 890</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="contact-single-info mb-30 text-center">
          <div className="contact-icon">
            <i className="fa fa-fax" />
          </div>
          <h3>number fax</h3>
          <p>Fax 1: 0(1234) 567 89012<br />Fax 2: 0(987) 567 890</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="contact-single-info mb-30 text-center">
          <div className="contact-icon">
            <i className="fa fa-envelope" />
          </div>
          <h3>address email</h3>
          <p>info@demo.com<br />yourname@domain.com</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-10 col-lg-12 m-auto">
        <div className="contact-message pt-60 pt-sm-20">
          <form id="contact-form" action="https://htmldemo.net/melani/melani/assets/php/mail.php" method="post" className="contact-form">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <input name="first_name" placeholder="Name *" type="text" />    
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <input name="phone" placeholder="Phone *" type="text" />   
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <input name="email_address" placeholder="Email *" type="text" />    
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <input name="contact_subject" placeholder="Subject *" type="text" />   
              </div>
              <div className="col-12">
                <div className="contact2-textarea text-center">
                  <textarea placeholder="Message *" name="message" className="form-control2" required defaultValue={""} />     
                </div>   
                <div className="contact-btn text-center">
                  <button className="check-btn sqr-btn" type="submit">Send Message</button> 
                </div> 
              </div> 
              <div className="col-12 d-flex justify-content-center">
                <p className="form-messege" />
              </div>
            </div>
          </form>    
        </div> 
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact