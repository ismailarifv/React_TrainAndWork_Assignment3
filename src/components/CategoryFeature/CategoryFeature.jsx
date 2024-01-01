import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CategoryFeature() {
  const {categoriesData,productData,addToCart} = useContext(DataContext);

  return (
    <div className="feature-category-vertical pt-100 pb-50 pt-sm-58 pb-sm-10">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-title text-center pb-44">
          <p>The most popular product categories</p>
          <h2 className="text-white">most popular items</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-lg-3 col-xl-2">
        <div className="tab-menu-vertical white-text vertical-bdr vertical-bdr__2">
          <ul className="nav flex-column">
            {
              categoriesData &&
              categoriesData.map((item,i)=>{
                return(
                  <li key={i}>
                  <a data-bs-toggle="tab" href={"#tab_"+item.id}>{item.title}</a>
                </li>
                )
              })
            }
          
          </ul>
        </div>
      </div>  
      <div className="col-md-9 col-lg-9 col-xl-10">
        <div className="tab-content">
          <div className="tab-pane fade show active" id="tab_1">
            <div className="feature-category-carousel2 slick-arrow-style spt-2 slick-padding row">
              {
                productData && 
                productData.map((item,i)=>{
                  if(item.categoryid == 1){
                    return(
                      <div key={i} className="col-4">
                      <div className="product-item item-black mb-20">
                        <div className="product-thumb">
                          <Link to={`/productdetails/${item.id}`}>
                            <img src={item.image} alt="product image" />
                          </Link>
                          <div className="box-label">
                            <div className="product-label new">
                              <span>new</span>
                            </div>
                            <div className="product-label discount">
                              <span>-{item.indirim}%</span>
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
                            <h3><Link to={`/productdetails/${item.id}`}>{item.title}</Link></h3>
                          </div>
                          <div className="price-box">
                            <span className="regular-price">${item.price- (item.price/item.indirim)}</span>
                            <span className="old-price"><del>${item.price}</del></span>
                          </div>
                          <div className="hover-box text-center">
                            <div className="product-btn">
                              <a onClick={()=>addToCart(item)}><i className="ion-bag" />Add to cart</a>
                            </div>
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
          <div className="tab-pane fade show " id="tab_2">
            <div className="feature-category-carousel2 slick-arrow-style spt-2 slick-padding row">
            {
                productData && 
                productData.map((item,i)=>{
                  if(item.categoryid == 2){
                    return(
                      <div key={i} className="col-4">
                      <div className="product-item item-black mb-20">
                        <div className="product-thumb">
                          <Link to={`/productdetails/${item.id}`}>
                            <img src={item.image} alt="product image" />
                          </Link>
                          <div className="box-label">
                            <div className="product-label new">
                              <span>new</span>
                            </div>
                            <div className="product-label discount">
                              <span>-{item.indirim}%</span>
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
                            <h3><Link to={`/productdetails/${item.id}`}>{item.title}</Link></h3>
                          </div>
                          <div className="price-box">
                            <span className="regular-price">${item.price- (item.price/item.indirim)}</span>
                            <span className="old-price"><del>${item.price}</del></span>
                          </div>
                          <div className="hover-box text-center">
                            <div className="product-btn">
                              <a onClick={()=>addToCart(item)}><i className="ion-bag" />Add to cart</a>
                            </div>
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
          <div className="tab-pane fade show " id="tab_3">
            <div className="feature-category-carousel2 slick-arrow-style spt-2 slick-padding row">
            {
                productData && 
                productData.map((item,i)=>{
                  if(item.categoryid == 3){
                    return(
                      <div key={i} className="col-4">
                      <div className="product-item item-black mb-20">
                        <div className="product-thumb">
                          <Link to={`/productdetails/${item.id}`}>
                            <img src={item.image} alt="product image" />
                          </Link>
                          <div className="box-label">
                            <div className="product-label new">
                              <span>new</span>
                            </div>
                            <div className="product-label discount">
                              <span>-{item.indirim}%</span>
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
                            <h3><Link to={`/productdetails/${item.id}`}>{item.title}</Link></h3>
                          </div>
                          <div className="price-box">
                            <span className="regular-price">${item.price- (item.price/item.indirim)}</span>
                            <span className="old-price"><del>${item.price}</del></span>
                          </div>
                          <div className="hover-box text-center">
                            <div className="product-btn">
                              <a onClick={()=>addToCart(item)}><i className="ion-bag" />Add to cart</a>
                            </div>
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
</div>

  )
}

export default CategoryFeature