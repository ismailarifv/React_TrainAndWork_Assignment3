

function Login() {
  return (
    <div className="col-lg-6">
            <div className="login-reg-form-wrap  pr-lg-50">
              <h2>Sign In</h2>
              <form action="#" method="post">
                <div className="single-input-item">
                  <input type="email" placeholder="Email or Username" required />
                </div>
                <div className="single-input-item">
                  <input type="password" placeholder="Enter your Password" required />
                </div>
                <div className="single-input-item">
                  <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
                    <div className="remember-meta">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="rememberMe" />
                        <label className="custom-control-label" htmlFor="rememberMe">Remember Me</label>
                      </div>
                    </div>
                    <a href="#" className="forget-pwd">Forget Password?</a>
                  </div>
                </div>
                <div className="single-input-item">
                  <button className="sqr-btn">Login</button>
                </div>
              </form>
            </div>
          </div>
  )
}

export default Login