import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreatePost.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const putData = {
    uid: 1,
    Titlt: title,
    Post_Description: description,
  };

  const createPost = (e) => {
    // e.preventDefault();
    console.log(putData);
    fetch("http://localhost:4000/crud/post/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putData),
    })
      .then((response) => {
        console.log(response);
        alert("Post successfully created");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="create_container">
      <h3 className="create_back_to_home">
        <Link to="/">Back to Home</Link>
      </h3>
      <h2>Create new Post</h2>
      <form onSubmit={createPost}>
        <div className="create_wrapper">
          <div className="create_title">
            <label>Title : </label>
            <input
              className="create_title_input"
              type="text"
              placeholder="your post title"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className=" create_title">
            <label>Description : </label>
            <input
              className="create_title_input"
              type="text"
              placeholder="your post description"
              required
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="create_buttons">
          <button className="backhome_btn">
            <Link className="main_link" to="/">
              Back To Home Page
            </Link>
          </button>
          <button className="create_btn" type="submit">
            create post
          </button>
          <button className="view_btn">
            <Link className="main_link" to="/view/all/posts">
              View post
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
