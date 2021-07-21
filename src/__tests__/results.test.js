import React from 'react';

import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Results from '../components/results';

const setup = () => {
  const data = {
    config:{ headers: 'foo/json'},
    data: { 
      fName: 'Aspen',
      lName: 'Berger',
    },
  };

  const utils = render(<Results data={data}/>);
  const headers = utils.getByTestId('headers');
  const results = utils.getByTestId('results');

  return {
    data,
    headers,
    results,
    ...utils,
  };
};

test('should render data', () => {
  const { data, headers, results  } = setup();
  expect(headers.textContent).toEqual(JSON.stringify(data.config.headers, undefined, 2));
  expect(results.textContent).toEqual(JSON.stringify(data.data, undefined, 2));
});