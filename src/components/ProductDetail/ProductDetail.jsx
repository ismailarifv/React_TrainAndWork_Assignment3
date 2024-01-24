import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import { useParams } from 'react-router-dom';
import BlogComment from "../ProductComment/ProductComment";

function ProductDetail() {
  const {productData,addToCart} = useContext(DataContext);
  const {id}=useParams()
  const foundItem = productData.find((item) => {
    return item.id == id;
  });
  
  return (
    <main style={{backgroundColor:"white"}}>
  <div className="product-details-wrapper pt-100 pb-14 pt-sm-58">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="product-details-inner">
            <div className="row">
              <div className="col-lg-5">
                <div className="product-large-slider mb-20 slider-arrow-style slider-arrow-style__style-2">
                  <div className="pro-large-img img-zoom" id="img1">
                    <img src={"/"+foundItem.image} alt="" />
                    
                   
                  </div>
                  
                </div>
                
              </div>
              <div className="col-lg-7">
                <div className="product-details-des pt-md-98 pt-sm-58">
                  <h3>{foundItem.name}</h3>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span><a href="#">1 review(s)</a></span>
                    </div>
                  </div>
                  <div className="pricebox">
                    <span className="regular-price">${foundItem.price-(foundItem.price/foundItem.discount)}</span>
                  </div>
                  <p>{foundItem.description}</p>
                  <div className="quantity-cart-box d-flex align-items-center mb-24">
                    <div className="quantity">
                      <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                    </div>
                    <div className="product-btn product-btn__color">
                      <a onClick={()=>addToCart(foundItem)}><i className="ion-bag" />Add to cart</a>
                    </div>
                  </div>
                  <div className="availability mb-20">
                    <h5>Availability:</h5>
                    <span>in stock</span>
                  </div>
                  <div className="share-icon">
                    <h5>share:</h5>
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-pinterest" /></a>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-details-reviews pt-98 pt-sm-58">
            <div className="row">
              <div className="col-lg-12">
                <div className="product-review-info">
                  <ul className="nav review-tab">
                    <li>
                      <a className="active" data-bs-toggle="tab" href="#tab_one">description</a>
                    </li>
                    <li>
                      <a data-bs-toggle="tab" href="#tab_two">information</a>
                    </li>
                    <li>
                      <a data-bs-toggle="tab" href="#tab_three">reviews</a>
                    </li>
                  </ul>
                  <div className="tab-content reviews-tab">
                    <div className="tab-pane fade show active" id="tab_one">
                      <div className="tab-one">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.</p>
                        <div className="review-description">
                          <div className="tab-thumb">
                            <img src="src/assets/img/about/services.jpg" alt="" />
                          </div>
                          <div className="tab-des mt-sm-20">
                            <h3>Product Information :</h3>
                            <ul>
                              <li>Donec non est at libero vulputate rutrum.</li>
                              <li>Morbi ornare lectus quis justo gravida semper.</li>
                              <li>Pellentesque aliquet, sem eget laoreet ultrices</li>
                              <li>Donec a neque libero.</li>
                              <li>Pellentesque aliquet, sem eget laoreet ultrices</li>
                              <li>Morbi ornare lectus quis justo gravida semper.</li>
                            </ul>
                          </div>
                        </div>
                        <p>Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus, ultricies posuere erat. Duis convallis, arcu nec aliquam consequat, purus felis vehicula felis, a dapibus enim lorem nec augue. Nunc facilisis sagittis ullamcorper.</p>
                        <p>Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab_two">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td>color</td>
                            <td>black, blue, red</td>
                          </tr>
                          <tr>
                            <td>size</td>
                            <td>L, M, S</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane fade" id="tab_three">
                      <BlogComment product={foundItem}/> 
                    </div>
                  </div>
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

export default ProductDetail