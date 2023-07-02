import React, { FC } from "react";
import { Comment } from "../../types/types";
import { Card } from "react-bootstrap";

interface CommentItemProps {
  comment: Comment;
}

export const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{comment.email}</Card.Title>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
