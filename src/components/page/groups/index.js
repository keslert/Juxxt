import React from 'react';
import styled from 'styled-components';
import groups from './all';

const Group = (props) => {
  const Group = groups[props.name]
  return (
    <Group.component {...props} />
  )
}

export default Group;