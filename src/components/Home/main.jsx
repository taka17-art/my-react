import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
        );
        const data = await res.json();

        setPosts(data.posts);
      } catch (error) {
        console.error("記事一覧の取得に失敗しました:", error);
      } finally {
        setLoading(false);
      }
    };
    fetcher();
  }, []);

  if (loading) {
    return <div className={classes.postLoading}>読み込み中...</div>;
  }

  if (!posts || posts.length === 0) {
    return <div>記事が見つかりませんでした。</div>;
  }

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
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`} className={classes.link}>
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
                        {post.categories?.map((category, index) => (
                          <p key={index} className={classes.postCategory}>
                            {category}
                          </p>
                        ))}
                      </div>
                    </div>

                    <p className={classes.postTitle}>{post.title}</p>

                    <div
                      className={classes.postBody}
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};