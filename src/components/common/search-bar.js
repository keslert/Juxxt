import React from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  display: flex;
  background: #1d1d1d;
  border-radius: 14px;
  padding: 5px 12px;
  color: #727272;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.3);
  input {
    flex: 1;
    color: #727272;
    background: transparent;
    outline: none;
    border: none;
  }
`

const SearchBar = ({
  value,
  placeholder,
  onChange,
  onSubmit,
}) => (
  <StyledSearchBar>
    <input value={value} placeholder={placeholder} size="3" />
    <i className="fa fa-search"></i>
  </StyledSearchBar>
)

export default SearchBar;