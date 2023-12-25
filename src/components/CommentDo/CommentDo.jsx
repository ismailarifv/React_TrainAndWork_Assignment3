

function CommentDo() {
  return (
    <div className="blog-comment-wrapper mb-sm-6">
            <h3>leave a reply</h3>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form action="#">
              <div className="comment-post-box">
                <div className="row">
                  <div className="col-12">
                    <label>comment</label>
                    <textarea name="commnet" placeholder="Write a comment" defaultValue={""} />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 mb-sm-20">
                    <label>Name</label>
                    <input type="text" className="coment-field" placeholder="Name" />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 mb-sm-20">
                    <label>Email</label>
                    <input type="text" className="coment-field" placeholder="Email" />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 mb-sm-20">
                    <label>Website</label>
                    <input type="text" className="coment-field" placeholder="Website" />
                  </div>
                  <div className="col-12">
                    <div className="coment-btn mt-20">
                      <input className="sqr-btn" type="submit" name="submit" defaultValue="post comment" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
  )
}

export default CommentDo