import React, { useEffect } from "react";
import { PostList } from "../../componets/App/PostList";
import { useAppDispatch } from "../../store/hooks";
import { getPosts } from "../../store/slices/postSlice";

export const Posts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <PostList />
    </div>
  );
};
