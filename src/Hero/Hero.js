// Libraries

import styled, { css } from 'styled-components';

// Dependencies 

// Styled Components

const StyledHeroWrapper = styled.section`
    padding: 2.375rem 0;
    justify-content: center;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const StyledAltText = styled.p`
    font-size: 1.25rem;
    line-height: 1.65rem;
    font-weight: 500;
    font-family: 'Inter';
    color: white;
    display: flex;
    margin: 0 0 calc(100vw / 20) 0;
    width: 40%;
`;


const StyledHeroText = styled.h1`
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    color: white;
    font-size: calc(100vw / 6);
    line-height: calc(100vw / 8);
    text-align: center;
    margin: 0;
    position: relative;
    z-index: 1;
    display: flex;
`;

const StyledLeftHeroImg = styled.div`
    height: calc(100vw / 3.5);
    width: calc(100vw / 3.5);
    overflow: visible;
    position: absolute;
    bottom: 0;
    &:before {
        content: " ";
        position: absolute;
        background-image: url("../imgs/hero_left.jpg");
        height: calc(100vw / 3.5);
        width: calc(100vw / 3.5);
        background-position: center;
        margin-left: -6.875rem;
    }
`;

const StyledRightHeroImg = styled.div`
    height: calc(100vw / 3.5);
    width: calc(100vw / 3.5);
    overflow: visible;
    position: absolute;
    top: 0;
    right: 0;
    &:before {
        content: " ";
        position: absolute;
        background-image: url("../imgs/hero_right.jpg");
        height: calc(100vw / 3.5);
        width: calc(100vw / 3.5);
        background-position: center;
        right: -6.875rem;
        background-repeat: no-repeat;
    }
`;

const StyledQuoteButton = styled.button`
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
    ${props => props.alignSelf === 'end' && css`
        align-self: end;
    `}
    font-weight: 700;
    margin-right: 39%;
    align-self: end;
    margin-top: 5%;
`;

// Components 

export const Button = (props) => (
    <>
        <StyledQuoteButton alignSelf={props.alignSelf}>{ props.content }</StyledQuoteButton>
    </>
);

const Hero = () => (
    <StyledHeroWrapper>
        <StyledAltText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</StyledAltText>
        <StyledHeroText>Creative Design</StyledHeroText>
        <Button content="Get a Quote" alignSelf="end" />
        <StyledLeftHeroImg alt="Left Hero Portfolio Image" />
        <StyledRightHeroImg alt="Right Hero Portfolio Image"  />
    </StyledHeroWrapper>
);

export default Hero;