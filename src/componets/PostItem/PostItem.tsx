import React, { FC, useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";

import { Post } from "../../types/types";
import { CommentsList } from "../CommentsList";

import avatar from "../../assets/Avatar.jpg";
import styles from "./PostItem.module.scss";
import { useAppDispatch } from "../../store/hooks";
import { getCommentsByPostId } from "../../store/slices/commentSlice";

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
      <Card.Body>
        <Row className={`align-items-center mb-3 ${styles.row}`}>
          <Col sm={3} md={3}>
            <Image className={styles.image} src={avatar} roundedCircle />
          </Col>
          <Col>
            <Row>
              <h3>{post.title}</h3>
            </Row>
            <Row className="mb-3">{post.body}</Row>
            <Row>
              <Col className={styles.button}>
                <Button onClick={() => handlerByComments(post.id)}>
                  Comments
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col sm={6}>{show && <CommentsList />}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
