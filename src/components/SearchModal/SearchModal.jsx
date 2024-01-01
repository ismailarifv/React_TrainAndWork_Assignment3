//import { DataContext } from "../../context/DataProvider";
//import { useContext } from "react";
import './Search.css'
function SearchModal() {
    //const {closeModal} = useContext(DataContext);
  return (
    <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
      </div>
      <div className="modal-body">
        <h1>Search</h1>
        <form className="navbar-form " role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>


  )
}

export default SearchModal