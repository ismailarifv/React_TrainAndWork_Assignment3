

function SepetMain() {
  return (
    <main style={{backgroundColor:"white"}}>
  <div className="cart-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cart-table table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="pro-thumbnail">Thumbnail</th>
                  <th className="pro-title">Product</th>
                  <th className="pro-price">Price</th>
                  <th className="pro-quantity">Quantity</th>
                  <th className="pro-subtotal">Total</th>
                  <th className="pro-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product/product-1.jpg" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Endeavor Daytrip</a></td>
                  <td className="pro-price"><span>$295.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                  </td>
                  <td className="pro-subtotal"><span>$295.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product/product-2.png" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Joust Duffle Bags</a></td>
                  <td className="pro-price"><span>$275.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty"><input type="text" defaultValue={2} /></div>
                  </td>
                  <td className="pro-subtotal"><span>$550.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product/product-3.jpg" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Compete Track Totes</a></td>
                  <td className="pro-price"><span>$295.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty">
                      <input type="text" defaultValue={1} />
                    </div>
                  </td>
                  <td className="pro-subtotal"><span>$295.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product/product-4.jpg" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">Bess Yoga Shorts</a></td>
                  <td className="pro-price"><span>$110.00</span></td>
                  <td className="pro-quantity">
                    <div className="pro-qty">
                      <input type="text" defaultValue={3} />
                    </div>
                  </td>
                  <td className="pro-subtotal"><span>$110.00</span></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart-update-option d-block d-md-flex justify-content-between">
            <div className="apply-coupon-wrapper">
              <form action="#" method="post" className=" d-block d-md-flex">
                <input type="text" placeholder="Enter Your Coupon Code" required />
                <button className="sqr-btn">Apply Coupon</button>
              </form>
            </div>
            <div className="cart-update mt-sm-16">
              <a href="#" className="sqr-btn">Update Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 ms-auto">
          <div className="cart-calculator-wrapper">
            <div className="cart-calculate-items">
              <h3>Cart Totals</h3>
              <div className="table-responsive">
                <table className="table">
                  <tbody><tr>
                      <td>Sub Total</td>
                      <td>$230</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>$70</td>
                    </tr>
                    <tr className="total">
                      <td>Total</td>
                      <td className="total-amount">$300</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
            <a href="checkout.html" className="sqr-btn d-block">Proceed To Checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default SepetMain