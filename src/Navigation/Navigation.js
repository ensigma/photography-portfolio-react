// Libraries

import styled, { css } from 'styled-components';

// Dependencies 

// Styled Components
const Wrapper = styled.nav`
    display: flex;
    flex-basis: 100%;
    padding-bottom: 6.625rem;
`;

const NavLinkLogoWrapper = styled.div`
    display: flex;
    flex-basis: 60%;
`;

const NavLinkWrapper = styled.div`
    display: flex;
    flex-basis: 40%;
    justify-content: space-between;
`;

const NavLink = styled.a`
    font-family: 'Inter';
    ${props => props.linkType === 'logo' && css`
        font-weight: 700;
    `}
    ${props => props.linkType === 'normal' && css`
        font-weight: 500;
    `}
    font-size: 1.25rem;
    line-height: 1.5rem;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
`;

const Navigation = () => (
    <Wrapper>
        <NavLinkLogoWrapper className="nav-link-logo-wrapper">
            <NavLink href="#" linkType="logo" title="Logo">logo</NavLink>
        </NavLinkLogoWrapper>
        <NavLinkWrapper className="nav-link-wrapper">
            <NavLink href="#" linkType="normal" title="Home">home</NavLink>
            <NavLink href="#" linkType="normal" title="Portfolio">portfolio</NavLink>
            <NavLink href="#" linkType="normal" title="About">about</NavLink>
            <NavLink href="#" linkType="normal" title="Contact">contact</NavLink>
        </NavLinkWrapper>
    </Wrapper>
)

export default Navigation;