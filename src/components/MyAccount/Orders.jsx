import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { useContext,useEffect} from "react";
function Orders() {
  const {order,setOrder,loggedInUser} = useContext(DataContext);
  
  useEffect(()=>{
    const orders =  async () =>{
      try {
        const response = await fetch("http://localhost:5020/api/Order");
        const result = await response.json();
        setOrder(result)
      } catch (error) {
        console.error("Error",error)
      }
      
    
    }
    orders()
    
  },[])

 
  return (
    <div className="tab-pane fade" id="orders" role="tabpanel">
                      <div className="myaccount-content">
                        <h3>Orders</h3>
                        <div className="myaccount-table table-responsive text-center">
                          <table className="table table-bordered">
                            <thead className="thead-light">
                              <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order &&
                              order.map((item,i)=>{
                                if (item.userId == loggedInUser.id) {
                                  return(
                                 
                                    <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{item.createDate.split('T')[0]}</td>
                                    <td>Approved</td>
                                    
                                    <td key={i}>$100</td>
                                    <h3></h3>
                                    <td><Link to={`/orderView/${item.id}`}>View</Link></td>
                                  </tr>
                                    )
                                }
                                
                              })
                              }
                            
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
  )
}

export default Orders