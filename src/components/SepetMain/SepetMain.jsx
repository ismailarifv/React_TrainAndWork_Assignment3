import { DataContext } from "../../context/DataProvider";
import { useContext,useEffect } from "react";
import { Link } from "react-router-dom";

function SepetMain() {

  const {cartItems,removeFromCart,subTotal,setSubTotal} = useContext(DataContext);

  
  useEffect(() => {
    const calculateTotal = () => {
      const total = cartItems.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
      setSubTotal(total);
    };

    calculateTotal();
  }, [cartItems]);
  

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
                {
                  cartItems.map((item,i)=>{
                    return(
                      <tr key={i}>
                      <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src={item.image} alt="Product" /></a></td>
                      <td className="pro-title"><a href="#">{item.name}</a></td>
                      <td className="pro-price"><span>${item.price-(item.price/item.discount)}</span></td>
                      <td className="pro-quantity">
                        <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                      </td>
                      <td className="pro-subtotal"><span>${item.price-(item.price/item.discount)}</span></td>
                      <td className="pro-remove"><a onClick={()=>removeFromCart(item.id)} href="#"><i className="fa fa-trash-o" /></a></td>
                    </tr>
                    )
                  })
                }
                
                
              </tbody>
            </table>
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
                      <td>${subTotal}</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>$70</td>
                    </tr>
                    <tr className="total">
                      <td>Total</td>
                      <td className="total-amount">${subTotal+70}</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
            <Link to={"/odeme"} className="sqr-btn d-block">Proceed To Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default SepetMain