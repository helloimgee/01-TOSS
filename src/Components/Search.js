import React from "react";
import "./Search.scss";

export default function Search() {
  return (
    <div className="search">
      <form className="search-form">
        <span className="search-form-img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.3 21.2l-5.7-5.7c1.2-1.5 2-3.4 2-5.5 0-4.7-3.8-8.5-8.5-8.5S1.5 5.3 1.5 10s3.8 8.5 8.5 8.5c2.1 0 4-.8 5.5-2l5.7 5.7c.1.1.3.2.5.2s.4-.1.5-.2c.4-.2.4-.7.1-1zM3 10c0-3.9 3.2-7 7-7s7 3.2 7 7-3.2 7-7 7-7-3.1-7-7z"
              fill="#b0b8c1"
            />
          </svg>
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
