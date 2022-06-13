import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ViewPost.css";

const View = () => {
  const [posts, setPosts] = useState([]);
  console.log("posts", posts);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      fetch("http://localhost:4000/crud/posts", { method: "get" }).then(
        async (res) => {
          const response = await res.json();
          setPosts(response.post);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };
  const deletePost = (index) => {
    console.log("index", index);
    fetch(`http://localhost:4000/crud/post/${index}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        alert("Post Delete Successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (posts.length > 0) {
    return (
      <div>
        <div className="view_header">
          <h3 className="view_back_to_home">
            <Link to="/"> Back to Home</Link>
          </h3>
          <h2>View your posts</h2>
        </div>

        {posts.map((item, index) => {
          return (
            <div className="view" key={index}>
              <p className="view_trash">
                <i
                  onClick={() => {
                    deletePost(item.postID);
                  }}
                  className="fa fa-trash fa-lg"
                ></i>
              </p>
              <h3>POST {index + 1}</h3>
              <div className="view_title" key={index}>
                <h3 className="view_title_label">Post Tile: </h3>
                <p>{item.Titlt} </p>
              </div>
              <div className="view_title">
                <h3 className="view_title_label"> Post Description :</h3>
                <p>{item.Post_Description}</p>
              </div>
              <div className="view_title">
                <h3 className="view_title_label"> Post Date :</h3>
                {/* <p>{moment(item.post_Date).format("L")}</p> */}
                <p>{moment(item.post_Date).format("llll")}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    <div>Loading..</div>;
  }
};

export default View;
