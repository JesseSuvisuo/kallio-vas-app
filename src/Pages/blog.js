import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [nrofpages, setNumberofpage] = useState(1);

  useEffect(() => {
    Axios.get("https://kallionvasemmisto.fi//wp-json/wp/v2/posts?_embed", {
      params: { page: page },
    }).then((response) => {
      setNumberofpage(response.headers["x-wp-totalpages"]);
      setPosts(response.data);
      console.log(response);
    });
  }, [page, setPosts]);

  const handlePrevPage = () => setPage(page - 1 ? page - 1 : 1);
  const handleNextPage = () => setPage(page < nrofpages ? page + 1 : nrofpages);

  return (
    <div className="posts-app__wrapper">
      <h1>Kallion Vasemmisto Blog</h1>

      <div className="posts-app__post-list">
        {posts &&
          posts.length &&
          posts.map((post, index) => {
            return (
              <div key={post.id} className="posts-app__post">
                <h2>{post.title.rendered}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
                <a href={post.link} target="_blank">
                  Read post
                </a>
              </div>
            );
          })}
      </div>

      <div className="posts-app__post-nav">
        <button onClick={handlePrevPage}>Newer posts</button>
        <p>
          Page {page} of {nrofpages}
        </p>
        <button onClick={handleNextPage}>Older posts</button>
      </div>
    </div>
  );
}
