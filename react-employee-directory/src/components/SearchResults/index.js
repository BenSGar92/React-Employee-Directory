import React from "react";
import "./searchResults.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">    
        {props.results.map((result, id) => (
            <li key={id} className="list-group-item">
                <div className="row">
                    
                    <div className="col-2">
                        <img src={result.picture.thumbnail} className="img-fluid" />
                    </div>
                    <div className="col-2">
                        {result.name.first} {result.name.last}
                    </div>
                    <div className="col-2">
                        {result.phone}
                    </div>
                    <div className="col-2">
                        {result.location.city}, {result.location.state}
                    </div>
                    <div className="col-4">
                        {result.email}
                    </div>
                </div>
            </li>
        ))}
    </ul>
  );
}

export default SearchResults;
