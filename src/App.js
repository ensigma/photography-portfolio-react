// Libraries

import styled from 'styled-components';

// Dependencies 

import Navigation from './Navigation/Navigation';
import Hero from './Hero/Hero';

// Styled Components

const Main = styled.main`
  background: #000;
  margin: 5rem 6.875rem 4.75rem;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const App = () => (
    <Main>
      <Navigation />
      <Hero />
    </Main>
);

export default App;
