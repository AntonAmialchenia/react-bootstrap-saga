import { FC, useEffect } from "react";
import { PostList } from "../../componets/PostList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPosts } from "../../store/slices/postSlice";
import { SpinnerApp } from "../../componets/SpinnerApp";

export const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {loading ? <SpinnerApp /> : <PostList posts={items} />}
    </div>
  );
};
