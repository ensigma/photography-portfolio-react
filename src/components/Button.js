// Libraries

import styled, { css } from 'styled-components';

// Styled Components

// Multiply font sizes by .67
const StyledButton = styled.button`
    color: black;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 1.608rem;
    line-height: 1.923rem;
    background: white;
    padding: .5rem 1.22rem;
    border: 0;
    width: max-content;
    display: flex;
    z-index: 1;
    ${props => props.justifyContent === 'flex-end' && css`
        justify-content: flex-end;
    `}
    font-weight: 700;
`;

const Button = (props) => (
    <>
        <StyledButton justifyContent={props.justifyContent}>{ props.content }</StyledButton>
    </>
);

export default Button;