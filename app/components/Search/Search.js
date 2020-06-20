import React from 'react';
import doclady from '../../images/docledy.svg';
const Search = () => {
  return (
    <div className="container-fluid white-bg padding-t-1 padding-b-1 padding-l-1">
      <div className="">
        <img className="img-fluid doc-lady" src={doclady} />
        <input
          className="form-control-sm margin-l-1"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
