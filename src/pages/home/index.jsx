import React from "react";

import Posts from "./components/posts";
import PostComponent from "./components/PostComponet";
import Uposts from "./components/Uposts";
import Writepost from "./components/writepost";

const Home = () => {
  return (
    <div className="w-[75%] overflow-auto bg-gray-100 flex flex-col custom-scrollbar">
    <Writepost/>
    <Posts/>
    </div>
    // <Uposts/>
    // <PostComponent/>
  );
};

export default Home;
