import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./component/createPost/CreatePost";
import Main from "./component/HeroPage";
import View from "./component/viewPost/ViewPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/create/post" element={<Create />} />
          <Route exact path="/view/all/posts" element={<View />} />
          <Route exact path="*" element={<h2>No page</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
