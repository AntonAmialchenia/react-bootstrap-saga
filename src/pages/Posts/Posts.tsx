import { FC, useEffect } from "react";
import { PostList } from "../../componets/PostList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPosts } from "../../store/slices/postSlice";
import { Row, Spinner } from "react-bootstrap";

import styles from "./Posts.module.scss";

export const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {isLoading ? (
        <Row className={styles.wrap}>
          <Spinner
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
            variant="secondary"
            w-25
            className={styles.spinner}
          />
        </Row>
      ) : (
        <PostList />
      )}
    </div>
  );
};
