import { useState,useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
function Login() {
  const {loginUser,loggedInUser} = useContext(DataContext);
 
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate();
 function logins() {
  loginUser(email,password)
  if (loggedInUser) {
    alert("Giriş başarılı")
  navigate('/');
  }
  
  setEmail("")
  setPassword("")
 }
  return (
    <div className="col-lg-6">
            <div className="login-reg-form-wrap  pr-lg-50">
              <h2>Sign In</h2>
              <div>
                <div className="single-input-item">
                  <input onChange={(x)=>setEmail(x.target.value)} type="email" placeholder="Email" required value={email} />
                </div>
                <div className="single-input-item">
                  <input onChange={(x)=>setPassword(x.target.value)} type="password" placeholder="Enter your Password" required value={password}/>
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
                  <button type="button" onClick={()=>logins() } className="sqr-btn">Login</button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Login