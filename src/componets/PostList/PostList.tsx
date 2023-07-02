import React, { FC } from "react";
import { PostItem } from "../PostItem";
import { useAppSelector } from "../../store/hooks";

import { RootState } from "../../store";

export const PostList: FC = () => {
  const { items } = useAppSelector((state: RootState) => state.posts);

  return (
    <>
      {Array.isArray([]) ? (
        items.map((item) => <PostItem key={item.id} post={item} />)
      ) : (
        <h1>Посты не найдены</h1>
      )}
    </>
  );
};
