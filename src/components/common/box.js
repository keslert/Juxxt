import styled from 'styled-components';

export default styled.div`
  ${props => `
    ${props.width && `width: ${props.width};`};
    ${props.display && `display: ${props.display};`};
    ${props.justify && `justify-content: ${props.justify};`};
    ${props.flexWrap && `flex-wrap: ${props.flexWrap};`};
    ${props.align && `align-items: ${props.align};`};

    ${props.margin && `margin: ${props.margin};`};
    ${props.padding && `padding: ${props.padding};`};

    ${props.marginTop && `margin-top: ${props.marginTop};`};

  `}
`