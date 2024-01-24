import { DataContext } from "../../context/DataProvider";
import { useContext,useState } from "react";
import { Link } from "react-router-dom";

function ShopMain() {
  const {productData,categoriesData,addToCart} = useContext(DataContext);
  const [categoryId,setCategoryId]=useState(1)
  return (
    <main style={{backgroundColor:"white"}}>
    <div className="shop-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 order-2 order-lg-1">
            <div className="sidebar-wrapper mt-md-100 mt-sm-48">
              <div className="sidebar-single">
                <div className="sidebar-title">
                  <h3>Category</h3>
                </div>
                <div className="sidebar-body">
                  <ul className="sidebar-category">
                    {
                      categoriesData &&
                      categoriesData.map((item,i)=>{
                        return(
                            <li key={i}><a onClick={()=>setCategoryId(item.id)}>{item.name}</a>
                      
                    </li>
                        )
                      })
                    }
                    
                    
                  </ul>
                </div>
              </div>
             
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 order-1 order-lg-2">
            <div className="shop-product-wrapper">
              
              <div className="shop-product-wrap grid row">
              {
                productData &&
                productData.map((item,i)=>{
                  if (item.categoryId == categoryId) {
                    
                  
                  return(
                    <div key={i} className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item mb-20">
                    <div className="product-thumb">
                      <Link to={`/productdetails/${item.id}`} >
                        <img src={item.image} alt="product image" />
                      </Link>
                      <div className="box-label">
                        <div className="product-label new">
                          <span>new</span>
                        </div>
                        <div className="product-label discount">
                          <span>-{item.discount}%</span>
                        </div>
                      </div>
                      <div className="product-action-link">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"> <span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><i className="ion-ios-eye-outline" /></span> </a>
                        <a href="#" data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"><i className="ion-ios-loop" /></a>
                        <a href="#" data-bs-toggle="tooltip" data-bs-placement="left" title="Wishlist"><i className="ion-ios-shuffle" /></a>
                      </div>
                    </div>
                    <div className="product-description text-center">
                      <div className="manufacturer">
                        <p><Link to={`/productdetails/${item.id}`}>Fashion Manufacturer</Link></p>
                      </div>
                      <div className="product-name">
                        <h3><Link to={`/productdetails/${item.id}`}>{item.name}</Link></h3>
                      </div>
                      <div className="price-box">
                        <span className="regular-price">${item.price - (item.price/item.discount)}</span>
                        <span className="old-price"><del>${item.price}</del></span>
                      </div>
                      <div className="product-btn">
                        <a onClick={()=>addToCart(item)}><i className="ion-bag" />Add to cart</a>
                      </div>
                      <div className="hover-box text-center">
                        <div className="ratings">
                          <span><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                  )
                  }
                })
              }
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </main>
  
  

  )
}

export default ShopMain