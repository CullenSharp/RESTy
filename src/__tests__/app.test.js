/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {
  render, fireEvent, screen, waitFor, act,
} from '@testing-library/react';
import {
  test, expect, beforeAll, afterAll, afterEach,
} from '@jest/globals';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';

import App from '../app';

const server = setupServer(
  rest.get('/', (req, res, ctx) => res(ctx.json({
    config: {
      headers: 'foo/json',
    },
    data: { fName: 'checkers' },
  }))),
);

const setup = () => {
  const utils = render(<App />);
  const input = utils.getByTestId('input');
  const submit = utils.getByTestId('submit');
  const method = utils.getByTestId('method');
  const url = utils.getByTestId('url');
  const getButton = utils.getByTestId('get');
  return {
    input,
    submit,
    method,
    url,
    getButton,
    ...utils,
  };
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should update input on change', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'dummy/URL' } });

  expect(input.value).toEqual('dummy/URL');
});

test('should render response data', async () => {
  const path = 'http://localhost/';
  const {
    input, submit, url, getButton, method,
  } = setup();

  fireEvent.change(input, { target: { value: path } });
  fireEvent.click(getButton);
  fireEvent.click(submit);

  expect(method.textContent).toEqual('Request Method: GET');
  expect(url.textContent).toEqual(`URL: ${path}`);
});

test.skip('should render response data', async () => {
  const path = 'http://localhost/';
  const {
    input, submit, getButton,
  } = setup();

  act(() => {
    fireEvent.change(input, { target: { value: path } });
    fireEvent.click(getButton);
    fireEvent.click(submit);
  });

  const headers = await waitFor(screen.getByTestId('headers'));
  const results = await waitFor(screen.getByTestId('results'));

  expect(headers.textContent).toEqual(JSON.stringify('foo/json', undefined, 2));
  expect(results.textContent).toEqual(JSON.stringify({ fName: 'checkers' }, undefined, 2));
});
