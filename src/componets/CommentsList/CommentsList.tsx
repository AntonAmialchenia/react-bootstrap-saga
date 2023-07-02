import { FC } from "react";
import { CommentItem } from "../CommentItem";
import { useAppSelector } from "../../store/hooks";

import { SpinnerApp } from "../SpinnerApp";

export const CommentsList: FC = () => {
  const { items, loading } = useAppSelector((state) => state.comments);

  return (
    <>
      {loading ? (
        <SpinnerApp />
      ) : (
        items.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      )}
    </>
  );
};
