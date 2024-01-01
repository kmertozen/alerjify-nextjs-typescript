import styled from "styled-components";

export const PostCardBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 50%;
  padding: 0 16px;
`;

export const PostCardImageWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 250px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const PostCardTitle = styled.div`
  font-size: 22px;
`;

export const PostCardDescription = styled.p`
  color: #6c6c6c;
  line-height: 26px;
`;

export const PostCardButton = styled.a`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  width: fit-content;
  padding: 14px 26px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-top: 14px;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #47c757;
    color: #fff;
    svg {
      color: #fff;
    }
  }
  svg {
    transition: all 0.2s ease-in-out;

    color: #47c757;
  }
`;

export const PostCardMetas = styled.div`
  color: #6c6c6c;
  display: flex;
  gap: 10px;
  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
