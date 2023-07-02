import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Image, Row } from "react-bootstrap";

import { Post } from "../../types/types";
import { CommentsList } from "../CommentsList";

import { useAppDispatch } from "../../store/hooks";
import { getCommentsByPostId } from "../../store/slices/commentSlice";

import avatar from "../../assets/Avatar.jpg";
import styles from "./PostItem.module.scss";

interface PostItemProps {
  post: Post;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState<boolean>(false);

  const handlerByComments = (id: number) => {
    dispatch(getCommentsByPostId(id));
    setShow((prev) => !prev);
  };

  return (
    <Card className={`mb-4 ${styles.wrapper}`}>
      <Card.Body className="p-0">
        <Row className={`align-items-center ${styles.row}`}>
          <Col sm={3} md={3}>
            <Link to="/user">
              <Image className={styles.image} src={avatar} roundedCircle />
            </Link>
          </Col>
          <Col>
            <Row>
              <h3>{post.title}</h3>
            </Row>
            <Row className="mb-3">{post.body}</Row>
            <Row>
              <Col className={styles.button}>
                {show ? (
                  <Button onClick={() => setShow((prev) => !prev)}>
                    Close
                  </Button>
                ) : (
                  <Button onClick={() => handlerByComments(post.id)}>
                    Comments
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        {show && (
          <Row className="justify-content-end mt-3">
            <Col sm={6}>{<CommentsList />}</Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};
