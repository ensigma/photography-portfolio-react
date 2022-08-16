// Libraries

import styled from 'styled-components';

// Dependencies 

import Button from '../components/Button';

// Styled Components

const HeroWrapper = styled.section`
    padding: 2.375rem 0;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

const AltText = styled.p`
    font-size: 1rem;
    line-height: 1.21rem;
    font-weight: 500;
    font-family: 'Inter';
    color: white;
    display: flex;
    margin: 0;
    width: 52%;
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
    position: relative;
    z-index: 1;
    display: flex;
`;

const LeftHeroImg = styled.div`
    height: 358.45px;
    width: 354.43px;
    overflow: visible;
    position: absolute;
    &:before {
        content: " ";
        position: absolute;
        background-image: url("../imgs/hero_left.jpg");
        height: 358.45px;
        width: 354.43px;
        background-position: center;
        margin-left: -6.875rem;
    }
`;

const Hero = () => (
    <HeroWrapper>
        <AltText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</AltText>
        <HeroText>Creative Design</HeroText>
        <Button content="Get a Quote" justifyContent="flex-end" />
        <LeftHeroImg alt="Left Hero Portfolio Image" />
    </HeroWrapper>
);

export default Hero;