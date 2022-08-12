// Libraries

import styled from 'styled-components';

// Dependencies 

// Styled Components
const Wrapper = styled.nav`
    display: flex;
    flex-basis: 100%;
`;

const NavLinkLogoWrapper = styled.div`
    display: flex;
    flex-basis: 60%;
`;

const NavLinkWrapper = styled.div`
    display: flex;
    flex-basis: 40%;
`;

const Navigation = () => (
    <Wrapper>
        <NavLinkLogoWrapper className="nav-link-logo-wrapper">
            <NavLink type="logo">Logo</NavLink>
        </NavLinkLogoWrapper>
        <NavLinkWrapper className="nav-link-wrapper">
            <NavLink type="link">Home</NavLink>
            <NavLink type="link">Portfolio</NavLink>
            <NavLink type="link">About</NavLink>
            <NavLink type="link">Contact</NavLink>
        </NavLinkWrapper>
    </Wrapper>
)