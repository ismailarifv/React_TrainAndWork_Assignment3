

function WishList() {
  return (
    <main style={{backgroundColor:"white"}}>
  <div className="wishlist-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
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
                  <th className="pro-quantity">Stock Status</th>
                  <th className="pro-subtotal">Add to Cart</th>
                  <th className="pro-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product/product-5.png" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">element snowboard</a></td>
                  <td className="pro-price"><span>$295.00</span></td>
                  <td className="pro-quantity"><span className="text-success">In Stock</span></td>
                  <td className="pro-subtotal"><a href="cart.html" className="sqr-btn text-white">Add to Cart</a></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product/product-6.png" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">raygun snowboard</a></td>
                  <td className="pro-price"><span>$275.00</span></td>
                  <td className="pro-quantity"><span className="text-success">In Stock</span></td>
                  <td className="pro-subtotal"><a href="cart.html" className="sqr-btn text-white">Add to Cart</a></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product/product-7.jpg" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">berzerker snoeboard</a></td>
                  <td className="pro-price"><span>$295.00</span></td>
                  <td className="pro-quantity"><span className="text-danger">Stock Out</span></td>
                  <td className="pro-subtotal"><a href="cart.html" className="sqr-btn text-white disabled">Add to Cart</a></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
                <tr>
                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product/product-8.jpg" alt="Product" /></a></td>
                  <td className="pro-title"><a href="#">turbo snowboard</a></td>
                  <td className="pro-price"><span>$110.00</span></td>
                  <td className="pro-quantity"><span className="text-success">In Stock</span></td>
                  <td className="pro-subtotal"><a href="cart.html" className="sqr-btn text-white">Add to Cart</a></td>
                  <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default WishList