import React from "react";
import { CommentWrapper, RowInfo, Title } from "./Comments.style";

const Comments = ({ id, email, body }) => {
  return (
    <CommentWrapper>
      <RowInfo>
        <Title>Comment Id</Title>
        <span>{id}</span>
      </RowInfo>
      <RowInfo>
        <Title>Email</Title>
        <span>{email}</span>
      </RowInfo>
      <RowInfo>
        <Title>Comment</Title>
        <p>{body}</p>
      </RowInfo>
    </CommentWrapper>
  );
};

export default Comments;
