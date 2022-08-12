// Libraries

import styled from 'styled-components';

// Dependencies 

import Navigation from './Navigation/Navigation';

// Styled Components

const Main = styled.main`
  background: #000;
  margin: 5rem 6.875rem 4.75rem;
`;

const App = () => (
    <Main>
      <Navigation />
    </Main>
);

export default App;
