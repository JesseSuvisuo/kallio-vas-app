import React from "react";

export default function MasonryPost({ post }) {
  const windowWidth = window.innerWidth;
  const imageBackground = { backgroundImage: `url(${post.image})` };

  const style =
    windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground;

  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div className="image-text">
        <div>
          <h2 className="image-title">{post.title}</h2>
          <span className="image-date">{post.date}</span>
        </div>
      </div>
    </a>
  );
}
