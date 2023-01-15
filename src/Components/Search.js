import React from "react";
import "./Search.scss";

export default function Search() {
  return (
    <div className="search">
      <form className="search-form">
        <span className="search-form-img">
          <img src="/images/search.svg" alt="검색창" />
        </span>
        <input
          className="search-form-input"
          type="text"
          placeholder="무엇이든 찾아보세요"
          autoComplete="off"
        />
      </form>
    </div>
  );
}
