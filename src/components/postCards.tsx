import React from "react";
import postCardsStyles from "./postCards.module.scss";
import PostCard from "./postCard";

function PostCards(props) {
  const posts = props.nodes;
  return (
    <div className={postCardsStyles.container}>
      {posts.map(({ node }) => (
        <PostCard node={node} key={node.fields.slug} />
      ))}
    </div>
  );
}

export default PostCards;
