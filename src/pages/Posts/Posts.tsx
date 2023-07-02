import React, { FC, useEffect } from "react";
import { PostList } from "../../componets/PostList";
import { useAppDispatch } from "../../store/hooks";
import { getPosts } from "../../store/slices/postSlice";
import { getComments } from "../../store/slices/commentSlice";

export const Posts: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
  }, [dispatch]);

  return (
    <div>
      <PostList />
    </div>
  );
};
