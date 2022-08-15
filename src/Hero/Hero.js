// Libraries

import styled from 'styled-components';

// Dependencies 

// Styled Components

const HeroWrapper = styled.section`
    padding: 2.375rem 0;
    max-height: 54.0625rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

const AltText = styled.p`
    font-size: 1.5rem;
    line-height: 1.81rem;
    font-weight: 500;
    font-family: 'Inter';
    color: white;
    display: flex;
`;


const HeroText = styled.h1`
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    color: white;
    font-size: 13rem;
    line-height: 9.8rem;
    text-align: center;
    margin: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
`;

const LeftHeroImg = styled.div`
    height: 535px;
    width: 529px;
    overflow: visible;
    &:before {
        content: " ";
        position: absolute;
        background-image: url("../imgs/hero_left.jpg");
        height: 535px;
        width: 528px;
        background-position: center;
        margin-left: -6.875rem;
    }
`;

const Hero = () => (
    <HeroWrapper>
        <AltText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</AltText>
        <HeroText>Creative Design</HeroText>
        <LeftHeroImg alt="Left Hero Portfolio Image" />
    </HeroWrapper>
);

export default Hero;