const db = require("../DBConfig/db.config");
const { post } = require("./crud.cntroller");
const user = {};

//get all posts
user.getAllposts = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM user_post`;
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

//DELETE particular post
user.deletePost = (postID) => {
  console.log(postID);
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM user_post WHERE postID = ${postID}`;
    db.query(query, [postID], (err, result) => {
      console.log(query);
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

//add new post detail
user.createPost = (uid, Titlt, Post_Description, post_Date) => {
  return new Promise((resolve, reject) => {
    const query = `insert into ?? (uid, Titlt, Post_Description,post_Date )values(?,?,?,?)`;
    db.query(
      query,
      ["user_post", uid, Titlt, Post_Description, new Date()],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

//Edit Post
/*  user.editPost = async ({ Titlt, Post_Description, post_Date }) => {
  Titlt = Titlt ?? null;
  Post_Description = Post_Description ?? null;
  post_Date = post_Date ?? null;

const query = `UPDATE ??
        SET Titlt = IFNULL(?, Titlt), Post_Description = IFNULL(?, Post_Description), post_Date=IFNULL(?, post_Date) WHERE postID = ?`;
  db.query(
    query,
    ["user_post", Titlt, Post_Description, new Date(), 8],
    (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    }
  );
  // let result = await query(query, [Titlt, Post_Description, post_Date]);

  // return result;
}; */

module.exports = user;
