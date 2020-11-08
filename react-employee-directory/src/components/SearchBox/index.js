import React from "react";
import "./searchBox.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBox(props) {
  return (
    <form className="search">
      <div className="form-group row">
        <div className="col-10">
            <input
            onChange={props.onChange}
            name="employee"
            list="employees"
            type="text"
            className="form-control"
            placeholder="Type in a name to search"
            id="employee"
            />
        </div>
        <div className="col-2">
            <button type="submit" onClick={props.onSubmit} className="btn btn-success">
                Search
            </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBox;
