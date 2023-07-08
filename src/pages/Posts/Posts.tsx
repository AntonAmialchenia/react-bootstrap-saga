import { FC, useEffect } from "react";
import { PostList } from "../../componets/PostList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchPosts } from "../../store/slices/postSlice";
import { SpinnerApp } from "../../componets/SpinnerApp";

export const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {status === "error" ? (
        <>
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получть посты. Попробуйте повторить попытку
            позже.
          </p>
        </>
      ) : (
        <>
          {status === "loading" ? <SpinnerApp /> : <PostList posts={items} />}
        </>
      )}
    </div>
  );
};
