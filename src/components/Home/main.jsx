import React from "react";
import { posts } from "../../data/posts";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <main className={classes.container}>
        <h2 className={classes.title}>記事一覧</h2>
        <ul className={classes.postList}>
          {posts.map((post) => {
            return (
              <li key={post.id} className={classes.list}>
                <Link to={`/posts/${post.id}`} className={classes.link}>
                  <div className={classes.postImage}>
                    <img src={post.thumbnailUrl} alt={post.title} />
                  </div>
                  <div className={classes.postContent}>
                    <div className={classes.postInfo}>
                      <div className={classes.postDate}>
                        {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                      <div className={classes.postCategories}>
                        {post.categories.map((category, index) => (
                          <span key={index} className={classes.postCategory}>
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className={classes.postTitle}>{post.title}</p>
                    <div
                      className={classes.postBody}
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};