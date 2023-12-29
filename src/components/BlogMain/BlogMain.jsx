 import { DataContext } from "../../context/DataProvider";
 import { useContext } from "react";

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
                        <a href="blog-details.html">
                          <img src={item.image} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="blog-content">
                      <h4><a href="blog-details.html">This is image Post For Blog</a></h4>
                      <p>
                        {item.short_desc}
                      </p>
                      <a href="blog-details.html" className="read-more">Read More...</a>
                    </div>
                  </article>
                </div>
              </div>
                  )
                })
              }
              
              
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="blog-item-single">
                  <article className="blog-post">
                    <div className="blog-post-content">
                      <div className="blog-top">
                        <div className="post-date-time">
                          <span>12 DECEMBER,22 </span>
                        </div>
                        <div className="post-blog-meta">
                          <p>post by <a href="#">HasTech</a></p>
                        </div>
                      </div>
                      <div className="blog-thumb embed-responsive embed-responsive-16by9">
                        <iframe className="w-100" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/501298839&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                      </div>
                    </div>
                    <div className="blog-content">
                      <h4><a href="blog-details.html">This is audio Post For Blog</a></h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate in consequatur temporibus ex magni non aperiam corporis, praesentium magnam a fuga eligendi natus est omnis perferendis dolorum quidem minus. Ipsam eveniet inventore quis magni architecto aut ab tempore deserunt amet minus id nulla, laboriosam dignissimos dolorum quasi veniam rerum...
                      </p>
                      <a href="blog-details.html" className="read-more">Read More...</a>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="blog-item-single">
                  <article className="blog-post">
                    <div className="blog-post-content">
                      <div className="blog-top">
                        <div className="post-date-time">
                          <span>15 DECEMBER,22 </span>
                        </div>
                        <div className="post-blog-meta">
                          <p>post by <a href="#">HasTech</a></p>
                        </div>
                      </div>
                      <div className="blog-thumb embed-responsive embed-responsive-16by9">
                        <iframe className="w-100" src="https://www.youtube.com/embed/DR2c266yWEA" allow="autoplay; encrypted-media" allowFullScreen />
                      </div>
                    </div>
                    <div className="blog-content">
                      <h4><a href="blog-details.html">This is video Post For Blog</a></h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate in consequatur temporibus ex magni non aperiam corporis, praesentium magnam a fuga eligendi natus est omnis perferendis dolorum quidem minus. Ipsam eveniet inventore quis magni architecto aut ab tempore deserunt amet minus id nulla, laboriosam dignissimos dolorum quasi veniam rerum...
                      </p>
                      <a href="blog-details.html" className="read-more">Read More...</a>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="blog-item-single">
                  <article className="blog-post">
                    <div className="blog-post-content">
                      <div className="blog-top">
                        <div className="post-date-time">
                          <span>10 DECEMBER,22 </span>
                        </div>
                        <div className="post-blog-meta">
                          <p>post by <a href="#">HasTech</a></p>
                        </div>
                      </div>
                      <div className="blog-thumb img-full">
                        <a href="blog-details.html">
                          <img src="src/assets/img/blog/blog-large-2.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="blog-content">
                      <h4><a href="blog-details.html">This is fifth Post For Blog</a></h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate in consequatur temporibus ex magni non aperiam corporis, praesentium magnam a fuga eligendi natus est omnis perferendis dolorum quidem minus. Ipsam eveniet inventore quis magni architecto aut ab tempore deserunt amet minus id nulla, laboriosam dignissimos dolorum quasi veniam rerum...
                      </p>
                      <a href="blog-details.html" className="read-more">Read More...</a>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="blog-item-single">
                  <article className="blog-post">
                    <div className="blog-post-content">
                      <div className="blog-top">
                        <div className="post-date-time">
                          <span>10 DECEMBER,22 </span>
                        </div>
                        <div className="post-blog-meta">
                          <p>post by <a href="#">HasTech</a></p>
                        </div>
                      </div>
                      <div className="blog-thumb img-full">
                        <a href="blog-details.html">
                          <img src="src/assets/img/blog/blog-large-4.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="blog-content">
                      <h4><a href="blog-details.html">This is six Post For Blog</a></h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate in consequatur temporibus ex magni non aperiam corporis, praesentium magnam a fuga eligendi natus est omnis perferendis dolorum quidem minus. Ipsam eveniet inventore quis magni architecto aut ab tempore deserunt amet minus id nulla, laboriosam dignissimos dolorum quasi veniam rerum...
                      </p>
                      <a href="blog-details.html" className="read-more">Read More...</a>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="blog-item-single">
                  <article className="blog-post">
                    <div className="blog-post-content">
                      <div className="blog-top">
                        <div className="post-date-time">
                          <span>10 DECEMBER,22 </span>
                        </div>
                        <div className="post-blog-meta">
                          <p>post by <a href="#">HasTech</a></p>
                        </div>
                      </div>
                      <div className="blog-thumb img-full">
                        <a href="blog-details.html">
                          <img src="src/assets/img/blog/blog-large-1.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="blog-content">
                      <h4><a href="blog-details.html">This is image Post For Blog</a></h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate in consequatur temporibus ex magni non aperiam corporis, praesentium magnam a fuga eligendi natus est omnis perferendis dolorum quidem minus. Ipsam eveniet inventore quis magni architecto aut ab tempore deserunt amet minus id nulla, laboriosam dignissimos dolorum quasi veniam rerum...
                      </p>
                      <a href="blog-details.html" className="read-more">Read More...</a>
                    </div>
                  </article>
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

export default BlogMain