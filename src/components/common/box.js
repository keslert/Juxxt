import styled from 'styled-components';

export default styled.div`
  ${props => `
    ${props.display && `display: ${props.display};`};
    ${props.justify && `justify-content: ${props.justify};`};
    ${props.align && `align-items: ${props.align};`};
    ${props.order && `order: ${props.order};`};

    ${props.paddingHorizontal && `padding-left: ${props.paddingHorizontal}; padding-right: ${props.paddingHorizontal};`};
  `}
`