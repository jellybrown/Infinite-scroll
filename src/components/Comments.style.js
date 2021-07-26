import styled from "styled-components";

export const CommentWrapper = styled.div`
  height: 213px;
  width: 500px;
  border-radius: 20px;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  padding: 20px;
`;

export const RowInfo = styled.div`
  margin-bottom: 12px;

  span,
  p {
    font-size: 18px;
    margin-right: 12px;
    line-height: 21px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  line-height: 21px;

  &:last-child {
    margin-bottom: 2px;
  }
`;
