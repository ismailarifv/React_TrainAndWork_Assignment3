import { useState } from "react";


function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")



  const postData = {
    name: name,
    email:email,
    password:password

  };

  function registed() {
    handleRegister(postData)
    alert("Kayıt Başarılı")
    setEmail("")
    setName("")
    setPassword("")
  }
    const handleRegister = async (userData) => {
      try {
        // Burada fetch ile db.json'daki Users içine userData'yı ekleyebilirsiniz.
        // Örnek fetch işlemi:
        const response = await fetch('http://localhost:3000/Users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (response.ok) {
          // Kayıt başarılı ise kullanıcıyı oturum açık şekilde işaretler
          console.log("KayıtBaşarılı");
        }
      } catch (error) {
        console.error('Register error:', error);
      }
    };
    
  
  return (
    <div className="col-lg-6">
            <div className="login-reg-form-wrap mt-md-100 mt-sm-58">
              <h2>Singup Form</h2>
              <div>
                <div className="single-input-item">
                  <input onChange={(x)=>setName(x.target.value)} type="text" placeholder="Full Name" required value={name}/>
                </div>
                <div className="single-input-item">
                  <input onChange={(x)=>setEmail(x.target.value)} type="email" placeholder="Enter your Email" required value={email} />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-input-item">
                      <input onChange={(x)=>setPassword(x.target.value)} type="password" placeholder="Enter your Password" required value={password} />
                    </div>
                  </div>
                  
                </div>
                <div className="single-input-item">
                  <div className="login-reg-form-meta">
                    <div className="remember-meta">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="subnewsletter" />
                        <label className="custom-control-label" htmlFor="subnewsletter">Subscribe Our Newsletter</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-input-item">
                  <button type="button" onClick={()=>registed()} className="sqr-btn">Register</button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Register