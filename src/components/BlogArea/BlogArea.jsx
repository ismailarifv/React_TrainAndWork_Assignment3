import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function BlogArea() {
  const {blogData} = useContext(DataContext);
  const firstThreeItems = blogData.slice(0, 3);
  return (
    <div>
  <div className="latest-blog-area pt-100 pb-90 pt-sm-58 pb-sm-50">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center pb-44">
            <p>New our blogs</p>
            <h2 className="text-white">From the blog</h2>
          </div>
        </div>
      </div>
      <div className="blog-carousel-active slick-arrow-style slick-padding row">
        {
          blogData && firstThreeItems &&
          firstThreeItems.map((item,i)=>{
            return(
              <div key={i} className="col-4">
          <div className="blog-item white-text">
            <article className="blog-post">
              <div className="blog-post-content">
                <div className="blog-top">
                  <div className="post-date-time">
                    <span>{item.date} </span>
                  </div>
                  <div className="post-blog-meta">
                    <p>post by HasTech</p>
                  </div>
                </div>
                <div className="blog-thumb img-full">
                  <Link to={`/blogdetails/${item.id}`}>
                    <img src={item.image} alt="" />
                  </Link>
                </div>
              </div>
              <div className="blog-content">
                <h4><Link to={`/blogdetails/${item.id}`}>{item.title}</Link></h4>
                <p>
                 {item.short_desc}...
                </p>
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

  )
}

export default BlogArea