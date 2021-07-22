/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { render } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

import Header from '../components/header';

const setup = () => {
  const utils = render(<Header />);
  const header = utils.getByTestId('header');

  return {
    header,
    ...utils,
  };
};

test('should render footer', () => {
  const { header } = setup();
  expect(header.textContent).toEqual('RESTy');
});
