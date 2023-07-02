import { FC, useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";
import { PostList } from "../../componets/PostList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPosts } from "../../store/slices/postSlice";

import styles from "./Posts.module.scss";

export const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {loading ? (
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
        <PostList posts={items} />
      )}
    </div>
  );
};
