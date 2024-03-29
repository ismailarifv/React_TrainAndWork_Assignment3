 import { DataContext } from "../../context/DataProvider";
 import { useContext,useEffect,useState } from "react";

function ProductComment(foundItem) {
    const {setProductIdsi,loggedInUser,userData} = useContext(DataContext);
    const[comments,setComments]=useState([])
    const[descriptions,setDescription]=useState("")
    useEffect(()=>{
      console.log(foundItem);
      setProductIdsi(foundItem.product.id)
    },[foundItem,setProductIdsi])
    const apiUrl = "http://localhost:5020/api/Comment"
    useEffect(()=>{
      const commentData =  async () =>{
        try {
          const response = await fetch(`${apiUrl}/${foundItem.product.id}`);
          const result = await response.json();
          setComments(result)
        } catch (error) {
          console.error("Error",error)
        }
        
      
      }
      commentData()
    })
    function postform() {
      
         
      const postData = {
        Description:descriptions,
        UserId:loggedInUser.id,
        ProductId:foundItem.product.id

      };
      
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
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
  return (
    <form action="#" className="review-form">
                        <h5>{comments.length} review for <span>{foundItem.product.title}</span></h5>
                        {
                          comments.map((item,i)=>{
                            return(
                              <div key={i} className="total-reviews">
                          <div className="rev-avatar">
                            <img src="src/assets/img/about/avatar.jpg" alt="" />
                          </div>
                          <div className="review-box">
                            <div className="ratings">
                              <span className="good"><i className="fa fa-star" /></span>
                              <span className="good"><i className="fa fa-star" /></span>
                              <span className="good"><i className="fa fa-star" /></span>
                              <span className="good"><i className="fa fa-star" /></span>
                              <span><i className="fa fa-star" /></span>
                            </div>
                            <div className="post-author">
                              <p> {
                              userData.map((user,x)=>{
                                if (user.id == item.userId) {
                                  return(
                                    <span key={x}>{user.userName} -</span>
                                  )
                                }
                              })
                              } {item.createDate}</p>
                            </div>
                            <p>{item.description}</p>
                          </div>
                        </div>
                            )
                          })
                        }
                        
                       
                        
                        <div className="form-group row">
                          <div className="col">
                            <label className="col-form-label"><span className="text-danger">*</span> Your Review</label>
                            <textarea onChange={(x)=>setDescription(x.target.value)} className="form-control" required defaultValue={""} />
                            <div className="help-block pt-10"><span className="text-danger">Note:</span> HTML is not translated!</div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col">
                            <label className="col-form-label"><span className="text-danger">*</span> Rating</label>
                            &nbsp;&nbsp;&nbsp; Bad&nbsp;
                            <input type="radio" defaultValue={1} name="rating" />
                            &nbsp;
                            <input type="radio" defaultValue={2} name="rating" />
                            &nbsp;
                            <input type="radio" defaultValue={3} name="rating" />
                            &nbsp;
                            <input type="radio" defaultValue={4} name="rating" />
                            &nbsp;
                            <input type="radio" defaultValue={5} name="rating" defaultChecked />
                            &nbsp;Good
                          </div>
                        </div>
                        <div className="buttons">
                          <button onClick={()=>postform()} className="sqr-btn" type="button">Continue</button>
                        </div>
                      </form> 
  )
}

export default ProductComment