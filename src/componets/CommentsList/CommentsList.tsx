import { FC } from "react";
import { CommentItem } from "../CommentItem";
import { useAppSelector } from "../../store/hooks";
import { Row, Spinner } from "react-bootstrap";

import styles from "./CommentsList.module.scss";

export const CommentsList: FC = () => {
  const { items, loading } = useAppSelector((state) => state.comments);

  return (
    <>
      {loading ? (
        <Row className={styles.wrap}>
          <Spinner
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
            variant="secondary"
            className={styles.spinner}
          />
        </Row>
      ) : (
        items.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      )}
    </>
  );
};
