import { FC, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { PostList } from "../../componets/PostList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchPosts, createPost } from "../../store/slices/postSlice";
import { SpinnerApp } from "../../componets/SpinnerApp";
import { ModalApp } from "../../componets/ModalApp";

import { NewPost } from "../../types";

import styles from "./Posts.module.scss";

export const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState<boolean>(false);
  const { items, status } = useAppSelector((state) => state.posts);

  const postCreate = (newPost: NewPost) => {
    dispatch(createPost(newPost));
    setShow((prev) => !prev);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center position-relative">
      <h1 className="mb-4">Список постов</h1>
      <ModalApp
        show={show}
        setShow={setShow}
        create={postCreate}
        variant="form"
        title="Новый пост"
      />
      <Button
        onClick={() => setShow((prev) => !prev)}
        className={`position-fixed rounded-circle ${styles.button}`}>
        <span>+</span>
      </Button>
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
