import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CloseButton, Col, Image, Row } from "react-bootstrap";

import { Post } from "../../types/types";
import { CommentsList } from "../CommentsList";
import { ModalApp } from "../ModalApp";

import { useAppDispatch } from "../../store/hooks";
import { getCommentsByPostId } from "../../store/slices/commentSlice";
import { deletePost } from "../../store/slices/postSlice";

import avatar from "../../assets/Avatar.jpg";
import styles from "./PostItem.module.scss";

interface PostItemProps {
  post: Post;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handlerByComments = (id: number) => {
    dispatch(getCommentsByPostId(id));
    setShow((prev) => !prev);
  };

  const handlerDeletePost = (id: number) => {
    dispatch(deletePost(id));
  };

  return (
    <>
      <ModalApp
        show={showModal}
        setShow={setShowModal}
        deletePost={handlerDeletePost}
        id={post.id}
      />
      <Card className={`mb-4 ${styles.wrapper} position-relative`}>
        <Card.Body className="p-0">
          <CloseButton
            className="position-absolute"
            onClick={() => setShowModal((prev) => !prev)}
          />
          <Row className={`align-items-center ${styles.row}`}>
            <Col sm={3} md={3} className="d-flex justify-content-center">
              <Image
                onClick={() => navigate(`/user/${post.userId}`)}
                className={styles.image}
                src={avatar}
                roundedCircle
              />
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
    </>
  );
};
