const express = require("express");
const crudservice = require("./crud.service");

const router = express.Router();

//get all posts from DB
router.get("/posts", async (request, response) => {
  const result = await crudservice.getAllposts();
  if (result.length > 0) {
    response.status(200).send({ post: result });
  } else {
    response.status(400).send({ msg: "post not available" });
  }
  console.log(result);
});

//Add new post from DB
router.post("/post/add", async (request, response) => {
  const result = await crudservice.createPost(
    request.body.uid,
    request.body.Titlt,
    request.body.Post_Description,
    request.body.post_Date
  );
  if (result) {
    response.status(200).send("Post added sucessfully !");
  } else {
    response.status(400).send({ msg: "POST alredy" });
  }
  console.log(result);
});

//DELETE Specific POST  from DB
router.delete("/post/:id", async (request, response) => {
  const result = await crudservice.deletePost(request.params.id);
  console.log("result", result);
  if (result.affectedRows) {
    response.status(200).send("post sucessfully delete !");
  } else {
    response.status(400).send({ msg: "post not available" });
  }
  console.log(result);
});

//Edit
/* router.patch("/post/edit/:id", async (request, response) => {
  const result = await crudservice.editPost(
    request.params.id,
    request.body.Titlt,
    request.body.Post_Description,
    request.body.post_Date
  );
  if (result.length > 0) {
    response.status(200).send("user fields updated sucessfully !");
  } else {
    response.status(400).send({ msg: "user not exist" });
  }
}); */

module.exports = router;
