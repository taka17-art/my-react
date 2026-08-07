import React from "react";
import { posts } from "../../data/posts";
import classes from "./Home.module.css";

export const Home = () => {
  
  const formatDate = (dateString) => {
  　if (!dateString) return "";
    const parts = dateString.split(/[-/T]/);
    if (parts.length >= 3) {
      const year = parts[0];
      const month = parseInt(parts[1], 10);
      const day = parseInt(parts[2], 10);
      return `${year}年${month}月${day}日`;
    }
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    }
    return dateString;
  };

  return (
    <div>
      <main className={classes.container}>
        <h2 className={classes.title}>記事一覧</h2>
        <ul className={classes.list}>
          {posts.map((post) => {
            return (
              <li key={post.id}>

                <a href={`/posts/${post.id}`} className={classes.link}>
                  <div className={classes.post}>                  
                    <div className={classes.postImage}>
                      <img src={post.thumbnailUrl} alt={post.title} />
                    </div>
                    <div className={classes.postContent}>
                      <div className={classes.postInfo}>
                        <div className={classes.postDate}>
                          {formatDate(post.createdAt)}
                        </div>
                        <div className={classes.postCategories}>
                          {post.categories.map((category, id) => {
                            return (
                              <p key={id} className={classes.postCategory}>
                                {category}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                      
                      <p className={classes.postTitle}>{post.title}</p>
                      
                      <div
                        className={classes.postBody}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    </div>

                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};