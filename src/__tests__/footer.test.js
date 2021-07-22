/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { render } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

import Footer from '../components/footer';

const setup = () => {
  const utils = render(<Footer />);
  const footer = utils.getByTestId('footer');

  return {
    footer,
    ...utils,
  };
};

test('should render footer', () => {
  const { footer } = setup();
  expect(footer.textContent).toEqual('© Cullen Sharp 2021');
});
