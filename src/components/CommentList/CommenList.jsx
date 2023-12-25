

function CommenList() {
  return (
    <div className="comment-section">
            <h3>03 comment</h3>
            <ul>
              <li>
                <div className="author-avatar">
                  <img src="src/assets/img/blog/comment-icon.png" alt="" />
                </div>
                <div className="comment-body">
                  <span className="reply-btn"><a href="#">reply</a></span>
                  <h5 className="comment-author">admin</h5>
                  <div className="comment-post-date">
                    20 nov, 2022 at 9:30pm
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                </div>
              </li>
              <li className="comment-children">
                <div className="author-avatar">
                  <img src="src/assets/img/blog/comment-icon.png" alt="" />
                </div>
                <div className="comment-body">
                  <span className="reply-btn"><a href="#">reply</a></span>
                  <h5 className="comment-author">admin</h5>
                  <div className="comment-post-date">
                    20 nov, 2022 at 9:30pm
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                </div>
              </li>
              <li>
                <div className="author-avatar">
                  <img src="src/assets/img/blog/comment-icon.png" alt="" />
                </div>
                <div className="comment-body">
                  <span className="reply-btn"><a href="#">reply</a></span>
                  <h5 className="comment-author">admin</h5>
                  <div className="comment-post-date">
                    20 nov, 2022 at 9:30pm
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                </div>
              </li>
            </ul>
          </div>
  )
}

export default CommenList