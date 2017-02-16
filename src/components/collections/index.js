import React from 'react';
import styled from 'styled-components';
import TripleDecker from './triple-decker';


const _Collection = styled.div`

`


const Collection = ({
  name,
  props,
}) => {
  const getCollection = () => {
    switch(name) {
      case 'TripleDecker':
        return <TripleDecker {...props} />;
      default:
        return <p>Bad Collection: {name}</p>
    }
  }

  return (
    <_Collection {...props}>
      {getCollection()}
    </_Collection>
  )

}

export default Collection;