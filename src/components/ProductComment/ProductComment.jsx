 import { DataContext } from "../../context/DataProvider";
 import { useContext,useEffect } from "react";

function ProductComment(foundItem) {
    const {setProductIdsi,addComment,setNewComment} = useContext(DataContext);
    useEffect(()=>{
      console.log(foundItem);
      setProductIdsi(foundItem.product.id)
    },[foundItem,setProductIdsi])
    
  return (
    <form action="#" className="review-form">
                        <h5>{foundItem.product.comment.length} review for <span>{foundItem.product.title}</span></h5>
                        {
                          foundItem.product.comment.map((item,i)=>{
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
                              <p><span> {item.userName}-</span> {item.date}</p>
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
                            <textarea onChange={(x)=>setNewComment(x.target.value)} className="form-control" required defaultValue={""} />
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
                          <button onClick={()=>addComment()} className="sqr-btn" type="button">Continue</button>
                        </div>
                      </form> 
  )
}

export default ProductComment