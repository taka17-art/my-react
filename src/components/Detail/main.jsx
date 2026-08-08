import { useParams, Link } from "react-router-dom";
import classes from "./ArticleDetail.module.css";
import { posts } from "../../data/posts";

export const Detail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

    if (!post) return <div>記事が見つかりませんでした。</div>;

    return (
        <div className={classes.container}>
            <div className={classes.post}>
                <div className={classes.postImage}>
                    <img src={post.thumbnailUrl} alt={post.title}/>
                    </div>
                <div className={classes.postContent}>
                    <div className={classes.postInfo}>
                        <div className={classes.postDate}>
                            {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                        <div className={classes.postCategories}>
                            {post.categories.map((category, index) => {
                                return (
                                    <p key={index} className={classes.postCategory}>
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