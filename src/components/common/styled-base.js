import styled from 'styled-components';


export const _DisplayFlex = styled.div`
  display: flex;
  box-sizing: border-box;
  ${props => `
    ${props.justify && `justify-content: ${props.justify};`};
    ${props.align && `align-items: ${props.align};`};
    ${props.wrap && `flex-wrap: ${props.wrap};`};
    ${props.flexDirection && `flex-direction: ${props.flexDirection};`};
    ${props.flex && `flex: ${props.flex};`};
    ${props.margin && `margin: ${props.margin};`};
    ${props.padding && `padding: ${props.padding};`};
    ${props.background && `background: ${props.background};`};
    ${props.backgroundSize && `background-size: ${props.backgroundSize};`};
    ${props.backgroundPosition && `background-position: ${props.backgroundPosition};`};
    ${props.width && `width: ${props.width}px;`};
    ${props.widthPercentage && `width: ${props.widthPercentage}%;`};
    ${props.maxWidth && `maxWidth: ${props.maxWidth}px;`};
    ${props.order && `order: ${props.order};`};
  `}
`;

export const _Flex = styled.div`
  flex: ${props => props.flex ? props.flex : 1}
`;

export const _Spacer = styled.div`
  ${props => `
    ${props.padding && `padding: ${props.padding};`};
    ${props.paddingTop && `padding-top: ${props.paddingTop};`};
    ${props.paddingLeft && `padding-left: ${props.paddingLeft};`};
    ${props.paddingBottom && `padding-bottom: ${props.paddingBottom};`};
    ${props.paddingRight && `padding-right: ${props.paddingRight};`};

    ${props.margin && `margin: ${props.margin};`};
    ${props.marginTop && `margin-top: ${props.marginTop};`};
    ${props.marginLeft && `margin-left: ${props.marginLeft};`};
    ${props.marginBottom && `margin-bottom: ${props.marginBottom};`};
    ${props.marginRight && `margin-right: ${props.marginRight};`};
  `}
`

export const _Block = styled.div`
  box-sizing: border-box;
  ${props => `
    ${props.textAlign && `text-align: ${props.textAlign};`};
    ${props.padding && `padding: ${props.padding};`};
    ${props.margin && `margin: ${props.margin};`};
    ${props.maxWidth && `max-width: ${props.maxWidth}px;`};
  `}
`