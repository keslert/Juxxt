import React from 'react';
import styled from 'styled-components';
import collections from './all';

const _Collection = styled.div`

`


const Collection = ({
  name,
  props,
}) => {
  const Collection = collections[name]
  return (
    <_Collection {...props}>
      <Collection.component {...props} />
    </_Collection>
  )

}

export default Collection;