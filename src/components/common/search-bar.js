import React from 'react';
import styled from 'styled-components';

const _SearchBar = styled.div`
  display: flex;
  background: rgba(255,255,255,0.8);
  border-radius: 14px;
  padding: 5px 12px;
  color: #727272;
  input {
    flex: 1;
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
  <_SearchBar>
    <input value={value} placeholder={placeholder} />
    <i className="fa fa-search"></i>
  </_SearchBar>
)

export default SearchBar;