import React from "react";
import postCardsStyles from "./postCards.module.scss";
import PostCard from "./postCard";
import { PostCardFragment } from "../types/generated";

function PostCards({ posts }: { posts: PostCardFragment[] }) {
  return (
    <div className={postCardsStyles.container}>
      {posts.map(node => (
        <PostCard post={node} key={node.fields!.slug!} />
      ))}
    </div>
  );
}

export default PostCards;
