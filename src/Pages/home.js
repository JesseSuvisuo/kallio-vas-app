import React from "react";
import posts from "../Assets/mocks/posts";
import { PostMasonry } from "../Components/Common";

const postConfig = {
  0: {
    gridArea: "1/1/2/3",
    height: "400px",
  },
  2: {
    height: "400px",
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
  });
};

mergeStyles(posts, postConfig);

export default function Home() {
  return (
    <section className="container home">
      <div className="row">
        <h1>Postaukset</h1>
        <PostMasonry posts={posts} columns={3} />
      </div>
    </section>
  );
}
