import { DataContext } from "../../context/DataProvider";
import { useContext, useEffect,useState } from "react";
import { useParams } from 'react-router-dom';

function OrderView() {
    const {productData,orderProductData} = useContext(DataContext);
    const {id}=useParams()
    const[ordersProducts,setOrdersProducts]=useState([]);
    
    
    useEffect(()=>{
        setOrdersProducts([])
        orderProductData.map((item)=>{
            
            
            if (item.id == id) {
                setOrdersProducts([...ordersProducts,item])
            }
        })
        
    },[])
    
  return (
    <main>
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
                  
                </tr>
              </thead>
              <tbody>
              {
    ordersProducts && ordersProducts.map((item) => {
        const matchedProduct = productData.find((itemProduct) => item.productId === itemProduct.id);
        console.log(matchedProduct.image);
        if (matchedProduct) {
            return (
                <tr key={matchedProduct.id} className="bg-white">
                    <td className="pro-thumbnail"><img className="img-fluid" src={matchedProduct.image} alt="Product" /></td>
                    <td className="pro-title"><a href="#">{matchedProduct.name}</a></td>
                    <td className="pro-price"><span>${matchedProduct.price}</span></td>
                    <td className="pro-quantity">
                        <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                    </td>
                    <td className="pro-subtotal"><span>${matchedProduct.price}</span></td>
                </tr>
            );
        }

        return null; // Eşleşen ürün bulunamazsa null döndür
    })
}
                
                
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

export default OrderView