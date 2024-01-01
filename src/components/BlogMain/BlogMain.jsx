 import { DataContext } from "../../context/DataProvider";
 import { useContext } from "react";
import { Link } from "react-router-dom";
function BlogMain() {

     const {blogData} = useContext(DataContext);
    
  return (
    <main style={{backgroundColor:"aliceblue"}}>
  <div className="blog-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="blog-wrapper">
            <div className="row">
              {
                blogData.map((item,i)=>{
                  return(
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                <div className="blog-item-single">
                  <article className="blog-post">
                    <div className="blog-post-content">
                      <div className="blog-top">
                        <div className="post-date-time">
                          <span>{item.date}</span>
                        </div>
                        <div className="post-blog-meta">
                          <p>post by <a href="#">HasTech</a></p>
                        </div>
                      </div>
                      <div className="blog-thumb img-full">
                        <Link to={`/blogdetails/${item.id}`}>
                          <img src={item.image} alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <h4><Link to={`/blogdetails/${item.id}`}>This is image Post For Blog</Link></h4>
                      <p>
                        {item.short_desc}
                      </p>
                      <Link to={`/blogdetails/${item.id}`} className="read-more">Read More...</Link>
                    </div>
                  </article>
                </div>
              </div>
                  )
                })
              }
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default BlogMain