import React from 'react';
import styled from 'styled-components';

const StyledPixel = styled.div`
    width: 20px;
    height: 20px;
    display: inline-block;
    background: ${props => props.color};
    flex: 1;
    align: right;
`;

class PaletteSwatch extends React.PureComponent {
    render() {
        const palette = this.props.palette;
        return (
            <div>
                {palette.map (color => <StyledPixel color = {color}> </StyledPixel>)}
            </div>
        );

        // return <StyledPixel color = {'#ff0000'}> </StyledPixel>

    }
}

export default PaletteSwatch;