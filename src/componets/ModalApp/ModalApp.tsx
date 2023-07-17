import { FC, SetStateAction, useState, MouseEvent } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { NewPost } from "../../types";
import { useAppSelector } from "../../store/hooks";

interface ModalAppProps {
  show: boolean;
  id?: number;
  variant?: "modal" | "form";
  title: string;
  setShow: (value: SetStateAction<boolean>) => void;
  deletePost?: (id: number) => void;
  create?: (newPost: NewPost) => void;
}
export const ModalApp: FC<ModalAppProps> = ({
  show,
  setShow,
  deletePost,
  id,
  variant = "modal",
  title,
  create,
}) => {
  const [values, setValues] = useState({ title: "", body: "" });
  const { error } = useAppSelector((state) => state.posts);

  const addNewPost = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newPost: NewPost = { ...values, userId: 1 };
    if (create) {
      create(newPost);
    }
    setValues({
      title: "",
      body: "",
    });
  };

  return (
    <Modal show={show} onHide={() => setShow((prev) => !prev)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {variant === "modal" ? (
        <>
          <Modal.Body>
            {error
              ? "Не удалось удалить. Попробуйте позже."
              : "Вы действительно хотите удалить пост?"}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShow((prev) => !prev)}>
              Нет
            </Button>
            <Button
              variant="primary"
              onClick={() => deletePost && id && deletePost(id)}>
              Удалить
            </Button>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Form className="p-4 d-flex flex-column">
            {error ? (
              <Form.Label>
                Не удалось создать пост, попробуйте позже.
              </Form.Label>
            ) : (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Введите заголовок поста</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      setValues({ ...values, title: e.target.value })
                    }
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Введите текст поста</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      setValues({ ...values, body: e.target.value })
                    }
                    type="text"
                  />
                </Form.Group>
              </>
            )}
            <Button onClick={addNewPost} className="align-self-end">
              Создать
            </Button>
          </Form>
        </>
      )}
    </Modal>
  );
};
