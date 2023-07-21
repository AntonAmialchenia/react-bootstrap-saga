import { FC } from "react";

import { useAppSelector } from "../../store/hooks";

import { CommentItem } from "../CommentItem";
import { SpinnerApp } from "../SpinnerApp";

export const CommentsList: FC = () => {
  const { items, status } = useAppSelector((state) => state.comments);

  return (
    <>
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
          {status === "loading" ? (
            <SpinnerApp />
          ) : (
            items.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))
          )}
        </>
      )}
    </>
  );
};
