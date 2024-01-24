import { DataContext } from "../../context/DataProvider";
import { useContext,useState } from "react";

function Odeme() {
  const {cartItems,subTotal,loggedInUser,setOrder,setCartItems} = useContext(DataContext);
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmailName]=useState("");
  const apiUrl = "http://localhost:5020/api/Order"
  const api = "http://localhost:5020/api/OrderProduct"
  
  function postform() {
      
    
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems)
    })
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Gönderilen veri:', data);
        // Gönderilen veriyle yapılabilecek işlemler burada
      })
      .catch(error => {
        console.error('Veri gönderme işleminde bir hata oluştu:', error);
      });
    }   

    
      const orderData =  async () =>{
        if (firstName && lastName && email) {
        try {
          const response = await fetch(`${apiUrl}/${loggedInUser.id}`);
          const result = await response.json();
          setOrder(result)
        } catch (error) {
          console.error("Error",error)
        }
        alert("Satın alma işlemi gerçekleşti")
        setCartItems([]);
        postform()
      }
      else{
        alert("Hiç bir alanı boş bırakamazsınız")
      }
      }
    
  

      
   
  
  return (
    <main style={{backgroundColor:"white"}}>
  <div className="checkout-page-wrapper pt-100 pb-90 pt-sm-58 pb-sm-54">
    <div className="container">
      
      <div className="row">
        <div className="col-lg-6">
          <div className="checkout-billing-details-wrap">
            <h2>Billing Details</h2>
            <div className="billing-form-wrap">
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-input-item">
                      <label htmlFor="f_name" className="required">First Name</label>
                      <input onChange={(x)=>setFirstName(x.target.value)} type="text" id="f_name" placeholder="First Name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-item">
                      <label htmlFor="l_name" className="required">Last Name</label>
                      <input  onChange={(x)=>setLastName(x.target.value)} type="text" id="l_name" placeholder="Last Name" required />
                    </div>
                  </div>
                </div>
                <div className="single-input-item">
                  <label htmlFor="email" className="required">Email Address</label>
                  <input  onChange={(x)=>setEmailName(x.target.value)} type="email" id="email" placeholder="Email Address" required />
                </div>
                
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="order-summary-details mt-md-26 mt-sm-26">
            <h2>Your Order Summary</h2>
            <div className="order-summary-content mb-sm-4">
              <div className="order-summary-table table-responsive text-center">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems &&
                      cartItems.map((item,i)=>{
                        return(
                          <tr key={i}>
                      <td><a href="single-product.html">{item.name} <strong> × 1</strong></a></td>
                      <td>${item.price}</td>
                    </tr>
                        )
                      })
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Sub Total</td>
                      <td><strong>${subTotal}</strong></td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td className="d-flex justify-content-center">
                        <ul className="shipping-type">
                          <li>
                            <div className="custom-control custom-radio">
                              <input type="radio" id="flatrate" name="shipping" className="custom-control-input" defaultChecked />
                              <label className="custom-control-label" htmlFor="flatrate">Flat Rate: $70.00</label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-radio">
                              <input type="radio" id="freeshipping" name="shipping" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="freeshipping">Free Shipping</label>
                            </div>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Total Amount</td>
                      <td><strong>${subTotal+70}</strong></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="order-payment-method">
                <div className="single-payment-method show">
                  <div className="payment-method-name">
                    <div className="custom-control custom-radio">
                      <input type="radio" id="cashon" name="paymentmethod" defaultValue="cash" className="custom-control-input" defaultChecked />
                      <label className="custom-control-label" htmlFor="cashon">Cash On Delivery</label>
                    </div>
                  </div>
                  <div className="payment-method-details" data-method="cash">
                    <p>Pay with cash upon delivery.</p>
                  </div>
                </div>
                <div className="single-payment-method">
                  <div className="payment-method-name">
                    <div className="custom-control custom-radio">
                      <input type="radio" id="directbank" name="paymentmethod" defaultValue="bank" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="directbank">Direct Bank Transfer</label>
                    </div>
                  </div>
                  <div className="payment-method-details" data-method="bank">
                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account..</p>
                  </div>
                </div>
                <div className="single-payment-method">
                  <div className="payment-method-name">
                    <div className="custom-control custom-radio">
                      <input type="radio" id="checkpayment" name="paymentmethod" defaultValue="check" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="checkpayment">Pay with Check</label>
                    </div>
                  </div>
                  <div className="payment-method-details" data-method="check">
                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                  </div>
                </div>
                <div className="single-payment-method">
                  <div className="payment-method-name">
                    <div className="custom-control custom-radio">
                      <input type="radio" id="paypalpayment" name="paymentmethod" defaultValue="paypal" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="paypalpayment">Paypal <img src="src/assets/img/paypal-card.jpg" className="img-fluid paypal-card" alt="Paypal" /></label>
                    </div>
                  </div>
                  <div className="payment-method-details" data-method="paypal">
                    <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                  </div>
                </div>
                <div className="summary-footer-area">
                  <div className="custom-control custom-checkbox mb-14">
                    <input type="checkbox" className="custom-control-input" id="terms" required />
                    <label className="custom-control-label" htmlFor="terms">I have read and agree to the website <a href="index.html">terms and conditions.</a></label>
                  </div>
                  <button onClick={()=>orderData()} type="button" className="check-btn sqr-btn">Place Order</button>
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

export default Odeme