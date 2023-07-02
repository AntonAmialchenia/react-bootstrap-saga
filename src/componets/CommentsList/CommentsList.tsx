import React, { FC } from "react";
import { CommentItem } from "../CommentItem";
import { useAppSelector } from "../../store/hooks";

export const CommentsList: FC = () => {
  const comments = useAppSelector((state) => state.comments.items);

  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </>
  );
};
