import React from 'react';

import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../app';

const setup = () => {
  const utils = render(<App/>);
  const input = utils.getByTestId('input');
  const submit = utils.getByTestId('submit');
  const method = utils.getByTestId('method');
  const url = utils.getByTestId('url');
  const getButton = utils.getByTestId('get');
  // const postButton = utils.getByTestId('post');
  // const putButton = utils.getByTestId('put');
  // const deleteButton = utils.getByTestId('delete');

  return {
    input,
    submit,
    method,
    url,
    getButton,
    ...utils,
  };
};

test('should update input on change', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'dummy/URL'}});

  expect(input.value).toEqual('dummy/URL');
});

test.skip('should render response data', () => {
  const path = 'https://pokeapi.co/api/v2/pokemon/ditto';
  const { input, submit, method, url, getButton } = setup();

  fireEvent.change(input, { target: { value: path}});
  fireEvent.click(getButton);
  fireEvent.click(submit);

  // expect(method.textContent).toEqual('Request Method: GET');
  expect(url.textContent).toEqual(`URL: ${path}`);
});