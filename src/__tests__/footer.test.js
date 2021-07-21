import React from 'react';

import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from '../components/footer';

const setup = () => {
  const utils = render(<Footer/>);
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