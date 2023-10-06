import styled from "styled-components";

export const Input = styled.input`
  border: 0px;
  width: 100%;
  color: rgb(19, 23, 23);
  font-size: 15px;
  line-height: 20px;
  cursor: auto;
  &::placeholder {
    color: #a5a5a5;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 5px;
  border: none;
  cursor: pointer;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  background-color: #e0e0e0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease 0s;
`;
export const InputWrapper = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 24px;
  transition: border 0.2s ease 0s;
  &:focus-within {
    border: 2px solid #47c757;
    ${SearchButton} {
      background-color: #47c757;
    }
  }
`;
