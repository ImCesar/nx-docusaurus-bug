import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestLibraryProps {}

const StyledTestLibrary = styled.div`
  color: pink;
`;

export const TestLibrary = (props: TestLibraryProps) => {
  return (
    <StyledTestLibrary>
      <h1>Welcome to test-library!</h1>
    </StyledTestLibrary>
  );
};

export default TestLibrary;
