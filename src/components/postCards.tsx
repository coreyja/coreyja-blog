import React from "react";
import postCardsStyles from "./postCards.module.scss";
import PostCard from "./postCard";
import { PostCardFragment } from "../types/generated";

interface Props {
  posts: PostCardFragment[];
}

const PostCards: React.FunctionComponent<Props> = ({ posts }) => {
  return (
    <div className={postCardsStyles.container}>
      {posts.map((post, index) => (
        <PostCard post={post} key={post.fields?.slug || index.toString()} />
      ))}
    </div>
  );
};

export default PostCards;
