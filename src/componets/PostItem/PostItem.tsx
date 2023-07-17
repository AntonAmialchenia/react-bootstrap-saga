import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Image,
  Row,
  Form,
  Spinner,
} from "react-bootstrap";

import { Post } from "../../types/types";
import { CommentsList } from "../CommentsList";
import { ModalApp } from "../ModalApp";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCommentsByPostId } from "../../store/slices/commentSlice";
import { deletePost, updatePost } from "../../store/slices/postSlice";

import avatar from "../../assets/Avatar.jpg";
import styles from "./PostItem.module.scss";

interface PostItemProps {
  post: Post;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const dispatch = useAppDispatch();
  const { update } = useAppSelector((state) => state.posts);
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handlerByComments = (id: number) => {
    dispatch(getCommentsByPostId(id));
    setShow((prev) => !prev);
  };

  const handlerUpdatePost = (post: Post) => {
    const postUpdate = { ...post, title, body };
    dispatch(updatePost(postUpdate));
    setTimeout(() => setEdit(update), 1250);
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
        title="Удаление поста"
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
              <Col className="d-flex justify-content-end mb-3">
                {edit ? (
                  <Button onClick={() => handlerUpdatePost(post)}>
                    {update ? (
                      <Spinner
                        className="me-1"
                        style={{ width: 16, height: 16 }}
                        animation="grow"
                      />
                    ) : (
                      ""
                    )}
                    <span>Save</span>
                  </Button>
                ) : (
                  <Button onClick={() => setEdit((prev) => !prev)}>Edit</Button>
                )}
              </Col>
              <Row>
                {edit ? (
                  <Form.Control
                    className="mb-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                  />
                ) : (
                  <h3>{post.title}</h3>
                )}
              </Row>
              <Row>
                {edit ? (
                  <Form.Control
                    className="mb-3"
                    rows={3}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    as="textarea"
                  />
                ) : (
                  <p>{post.body}</p>
                )}
              </Row>

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
