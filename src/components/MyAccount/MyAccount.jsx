import AccountDetails from "./AccountDetails"
import Address from "./Address"
import Orders from "./Orders"


function MyAccount() {
  return (
    <main style={{backgroundColor:"white"}}>
    <div className="my-account-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="myaccount-page-wrapper">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <div className="myaccount-tab-menu nav" role="tablist">
                   
                    <a href="#orders" data-bs-toggle="tab"><i className="fa fa-cart-arrow-down" /> Orders</a>
                    <a href="#address-edit" data-bs-toggle="tab"><i className="fa fa-map-marker" /> address</a>
                    <a href="#account-info" data-bs-toggle="tab"><i className="fa fa-user" /> Account Details</a>
                    <a href="login-register.html"><i className="fa fa-sign-out" /> Logout</a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-8">
                  <div className="tab-content" id="myaccountContent">
                    
                    <Orders/>
                    <Address/>
                    <AccountDetails/>
                  </div>
                </div> 
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default MyAccount