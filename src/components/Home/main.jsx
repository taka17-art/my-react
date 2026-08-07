import React from "react";
import { posts } from "../../data/posts";
import classes from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <main className={classes.container}>
      {/* ここに「記事一覧」を追加*/}
      <h2 className={classes.title}>記事一覧</h2>
      <ul className={classes.container}>
        {posts.map((post) => {
          return (
           <li key={post.id} className={classes.list}>
            {/* href には記事詳細ページのURLを指定 */}
            <a href={`/posts/${post.id}`} className={classes.link}>
            {/* サムネイル画像は img タグで表示 */}
             <img src={post.thumbnailUrl} alt={post.title} />
              <span>{post.title}</span>
                <div className={classes.post}>
                  <div className={classes.postContent}>
                    <div className={classes.postInfo}>
                      <div className={classes.postDate}>
                        {new Date(post.createdAt).toLocaleDateString()}
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
                    <div />
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