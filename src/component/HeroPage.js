import React from "react";
import Create from "./createPost/CreatePost";
import { Link } from "react-router-dom";
import View from "./viewPost/ViewPost";
import "./HeroPage.css";

const Main = () => {
  return (
    <div className="main_container">
      <h2 className="main_header"> Posts</h2>
      <div className="main_content">
        <div className="main_create">
          <button className="main_btn">
            <Link className="main_link" to="/create/post">
              create Post
            </Link>
          </button>
        </div>
        <div className="main_view">
          <button className="main_btn">
            <Link className="main_link" to="/view/post">
              view Post
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
