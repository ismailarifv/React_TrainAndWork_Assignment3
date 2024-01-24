
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import { useParams } from 'react-router-dom';
function BlogDetail() {
  const {blogData} = useContext(DataContext);
  const {id}=useParams()
  const foundItem = blogData.find((item) => {
    return item.id == id;
  });
  return (
    <main style={{backgroundColor:"white"}}>
      
  <div className="blog-main-wrapper pt-100 pb-100 pt-sm-58 pb-sm-58">
    <div className="container">
      <div className="row">
      <h1 className="text-center" style={{color:"black"}}>{foundItem.name}</h1>
        <div className="col-lg-12 order-1">
          <div className="blog-wrapper">
            <div className="blog-item-single">
              <article className="blog-post blog-details">
                <div className="blog-post-content">
                  <div className="blog-top">
                    <div className="post-date-time">
                      <span>{foundItem.date} </span>
                    </div>
                    <div className="post-blog-meta">
                      <p>post by <a href="#">HasTech</a></p>
                    </div>
                  </div>
                  <div className="blog-thumb">
                    <div className="blog-gallery-slider slider-arrow-style slider-arrow-style__style-2">
                      <div className="blog-single-slide">
                        <img src={"/"+foundItem.image} alt="" />
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div className="blog-content blog-details">
                  <h4>{foundItem.title}</h4>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis consequuntur illo aliquid nihil ad neque, debitis praesentium libero ullam asperiores exercitationem deserunt inventore facilis, officiis,</p>
                  <blockquote><p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p></blockquote> 
                  <p>aliquam maiores asperiores recusandae commodi blanditiis ipsum tempora culpa possimus assumenda ab quidem a voluptatum quia natus? Ex neque, saepe reiciendis quasi velit perspiciatis error vel quas quibusdam autem nesciunt voluptas odit quis dignissimos eos aspernatur voluptatum est repellat. Pariatur praesentium, corrupti deserunt ducimus quo doloremque nostrum aspernatur saepe cupiditate sit autem exercitationem debitis, maiores vitae perferendis nemo? Voluptas illo, animi temporibus quod earum molestias eaque, iure rem amet autem dignissimos officia dolores numquam distinctio esse voluptates optio pariatur aspernatur omnis? Ipsam qui commodi velit natus reiciendis quod quibusdam nemo eveniet similique animi!</p>
                </div>
                <div className="tag-line">
                  <h4>tag:</h4>
                  <a href="#">dry food</a>,
                  <a href="#">wet food</a>,
                  <a href="#">reach food</a>,
                </div>
                <div className="blog-sharing text-center">
                  <h4>share this post:</h4>
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-pinterest" /></a>
                  <a href="#"><i className="fa fa-google-plus" /></a>
                </div>
              </article>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default BlogDetail