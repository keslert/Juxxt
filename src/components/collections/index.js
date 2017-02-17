import React from 'react';
import styled from 'styled-components';
import collections from './all';

const Collection = (props) => {
  const Collection = collections[props.name]
  return (
    <Collection.component {...props} />
  )
}

export default Collection;