import Login from "./Login"
import Register from "./Register"


function Account() {
  return (
    <main style={{backgroundColor:"white"}}>
  <div className="login-register-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div className="container">
      <div className="member-area-from-wrap">
        <div className="row">
          <Login/>
          <Register/>
          
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default Account