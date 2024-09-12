import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search(){

    const[keyword,setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
      setKeyword(e.target.value)
        navigate('search?keyword='+keyword)
    }

    return (
        <div className="input-group">
        <input
          type="text"
          id="search_field"
          onChange={handleSearch}
          onBlur={handleSearch}
          className="form-control"
          placeholder="Enter Product Name ..."
        />
        <div className="input-group-append">
          <button onClick={handleSearch}id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    )
}