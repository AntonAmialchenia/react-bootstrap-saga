import { FC } from "react";

import { useAppSelector } from "../../store/hooks";

import { CommentItem } from "../CommentItem";
import { SpinnerApp } from "../SpinnerApp";
import { useComments } from "../../store/useComments";

export const CommentsList: FC = () => {
  // const { items, status } = useAppSelector((state) => state.comments);
  const { items, error, isLoading } = useComments((state) => state);

  return (
    <>
      {error ? (
        <>
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получть посты. Попробуйте повторить попытку
            позже.
          </p>
        </>
      ) : (
        <>
          {isLoading ? (
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
