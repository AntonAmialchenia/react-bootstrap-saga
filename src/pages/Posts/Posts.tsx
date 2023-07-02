import { FC, useEffect } from "react";
import { PostList } from "../../componets/PostList";
import { useAppDispatch } from "../../store/hooks";
import { getPosts } from "../../store/slices/postSlice";

export const Posts: FC = () => {
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
