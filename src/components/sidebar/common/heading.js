import React from 'react';
import { StyledField, StyledHeading } from './styled';
import RSelect from 'react-select';



const Heading = ({
  text,
  locked,
  onChange,
}) => (
  <StyledHeading>
    {text}
  </StyledHeading>
)
export default Heading;