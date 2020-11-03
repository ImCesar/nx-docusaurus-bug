import React from 'react';
import { TestLibrary, TestLibraryProps } from './test-library';

export default {
  component: TestLibrary,
  title: 'TestLibrary',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TestLibraryProps = {};

  return <TestLibrary />;
};
