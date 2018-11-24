import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  margin: 10px;
`;

const FilterButton = styled.small`
  color: ${props => (props.isActive ? '#333' : 'lightgray')};
  background-color: ${props => (props.isActive ? 'lightgray' : 'none')};
  border-radius: 15px;
  padding: 3px 10px;
  margin: 3px;
  cursor: pointer;
`;

function FilterButtons({ filter, onClick, todoCount }) {
  return (
    <Wrapper>
      {['All', 'Active', 'Completed'].map(value => (
        <FilterButton
          key={value}
          isActive={filter === value}
          onClick={() => onClick(value)}
        >
          {value} {filter === value && `(${todoCount})`}
        </FilterButton>
      ))}
    </Wrapper>
  );
}

FilterButtons.propTypes = {
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  todoCount: PropTypes.number.isRequired,
};

export default FilterButtons;
