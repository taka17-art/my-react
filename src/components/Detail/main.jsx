import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./ArticleDetail.module.css";

export const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
        );
        const data = await res.json();

        setPost(data.post);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetcher();
    }
  }, [id]);

  if (loading) {
    return <div className={classes.postLoading}>読み込み中...</div>;
  }

  if (!post) {
    return (
      <div className={classes.postError}>記事が見つかりませんでした。</div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.post}>
        <div className={classes.postImage}>
          <img src={post.thumbnailUrl} alt={post.title} />
        </div>
        <div className={classes.postContent}>
          <div className={classes.postInfo}>
            <div className={classes.postDate}>
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <div className={classes.postCategories}>
              {post.categories?.map((category, index) => (
                <p key={index} className={classes.postCategory}>
                  {category}
                </p>
              ))}
            </div>
          </div>
          <h1 className={classes.postTitle}>{post.title}</h1>
          <div
            className={classes.postBody}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className={classes.backLinkContainer}>
            <Link to="/" className={classes.backLink}>
              記事一覧へ戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};