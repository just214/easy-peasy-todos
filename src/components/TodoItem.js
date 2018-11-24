import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextButton } from './common';

const Wrapper = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
`;

const TodoText = styled.span`
  cursor: pointer;
  font-weight: bold;
  text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
  border-radius: 20px;
  background-color: lightblue;
  padding: 3px 10px;
  color: #333;
`;

function TodoItem({ todo, onClick, onDelete }) {
  return (
    <Wrapper>
      <TodoText onClick={onClick} isCompleted={todo.isCompleted}>
        {todo.title}
      </TodoText>
      <TextButton color="tomato" onClick={onDelete}>
        delete
      </TextButton>
    </Wrapper>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
