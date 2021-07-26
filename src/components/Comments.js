import React from "react";
import { CommentWrapper, RowInfo, Title } from "./Comments.style";

const Comments = () => {
  return (
    <CommentWrapper>
      <RowInfo>
        <Title>Comment Id</Title>
        <span>3</span>
      </RowInfo>
      <RowInfo>
        <Title>Email</Title>
        <span>3gdsd@na.aa</span>
      </RowInfo>
      <RowInfo>
        <Title>Comment</Title>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          dolorum animi commodi maxime omnis repellat! Similique quo unde
          voluptatibus doloribus?
        </p>
      </RowInfo>
    </CommentWrapper>
  );
};

export default Comments;
