import { Link } from "react-router-dom"
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

function Header() {
  const {loggedInUser,logoutUser,cartItems,openModal} = useContext(DataContext);
 
  return (
 
        <header>
  <div className="header-top-area theme-color-5 text-center text-md-start bdr-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-5">
          <div className="header-call-action">
            <p>Welcome you to Melani store!</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-7">
          <div className="header-top-right float-md-end float-none">
            <nav>
              <ul>
                <li>
                  <div className="dropdown header-top-dropdown">
                    <a className="dropdown-toggle" id="myaccount" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      my account
                      <i className="fa fa-angle-down" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="myaccount">
                      <Link to={"/myacount"} className="dropdown-item" >my account</Link>
                      {
                        loggedInUser ?
                        (
                        <>
                        <a className="dropdown-item" >{loggedInUser.name}</a>
                        <Link onClick={()=>logoutUser()} className="dropdown-item">Logout</Link>
                        
                        </>
                        )

                        :
                        (
                          <>
                          <Link to={"/acount"} className="dropdown-item"> login</Link>
                        <Link to={"/acount"} className="dropdown-item">register</Link>
                          </>
                          
                        )
                      }
                      
                    </div>
                  </div>
                </li>
                
                
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header-main sticky hm_5 theme-color-5 pt-sm-10 pb-sm-10 pt-md-10 pb-md-10">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-3 col-md-6 col-6">
          <div className="logo">
            <Link to={"/"}>
              <img src="src/assets/img/logo/logo_5.png" alt="Brand logo" />
            </Link>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <div className="main-header-inner">
            <div className="main-menu white-text">
              <nav id="mobile-menu">
                <ul>
                  <li className="active"><Link to={"/"}>Home</Link>
                    
                  </li>
                  
                  <li><Link to={"/shop"}>shop</Link>
                    
                  </li>
                  <li><Link to={"/blogs"}>Blog</Link>
                    
                  </li>
                  <li><Link to={"/contact"}>Contact us</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-6 ms-auto">
          <div className="header-setting-option setting-style-2 white-text">
            <div className="search-wrap">
              <button type="submit" onClick={()=>openModal} className="search-trigger"><i className="ion-ios-search-strong" /></button>
            </div>
            <div className="header-mini-cart">
              <Link to={"/sepet"} className="mini-cart-btn">
                <i className="ion-bag" />
                <span className="cart-notification">{cartItems.length}</span>
              </Link>
              <ul className="cart-list">
                <li>
                  <div className="cart-img">
                    <a href="product-details.html"><img src="src/assets/img/cart/cart-1.jpg" alt="" /></a>
                  </div>
                  <div className="cart-info">
                    <h4><a href="product-details.html">simple product 09</a></h4>
                    <span>$60.00</span>
                  </div>
                  <div className="del-icon">
                    <i className="fa fa-times" />
                  </div>
                </li>
                <li>
                  <div className="cart-img">
                    <a href="product-details.html"><img src="src/assets/img/cart/cart-2.jpg" alt="" /></a>
                  </div>
                  <div className="cart-info">
                    <h4><a href="product-details.html">virtual product 10</a></h4>
                    <span>$50.00</span>
                  </div>
                  <div className="del-icon">
                    <i className="fa fa-times" />
                  </div>
                </li>
                <li className="mini-cart-price">
                  <span className="subtotal">subtotal : </span>
                  <span className="subtotal-price ms-auto">$110.00</span>
                </li>
                <li className="checkout-btn">
                  <a href="#">checkout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 d-block d-lg-none">
          <div className="mobile-menu header-5" />
        </div>
      </div>
    </div>
  </div>
  <div className="box-search-content search_active block-bg close__top">
    <form className="minisearch" action="#">
      <div className="field__search">
        <input type="text" placeholder="Search Our Catalog" />
        <div className="action">
          <a href="#"><i className="fa fa-search" /></a>
        </div>
      </div>
    </form>
    <div className="close__wrap">
      <span>close</span>
    </div>
  </div>
  
</header>

  )
}

export default Header