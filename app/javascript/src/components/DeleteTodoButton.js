import styled from 'styled-components';

const DeleteTodoButton = styled.button`
  height: 35px;
  width: 35px;
  background-color: red;
  border: none;
  border-radius: 5px;
  color: white;
  transition: 0.2s;
  margin-left: 5px;

  &:hover {
    box-shadow: 0 0 0 4px pink;
  }
`;

export default DeleteTodoButton;
