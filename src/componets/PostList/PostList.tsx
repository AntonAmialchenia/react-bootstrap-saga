import { FC } from "react";

import { PostItem } from "../PostItem";
import { Post } from "../../types/types";

interface PostListProps {
  posts: Post[];
}

export const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <>
      {Array.isArray(posts) ? (
        posts.map((item) => <PostItem key={item.id} post={item} />)
      ) : (
        <h1>Посты не найдены</h1>
      )}
    </>
  );
};
