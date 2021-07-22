/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { jest, test, expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

import Form from '../components/form';

const setup = () => {
  const setRequestParams = jest.fn();

  const utils = render(<Form setRequestParams={setRequestParams} />);
  const input = utils.getByTestId('input');
  const submit = utils.getByTestId('submit');
  const getButton = utils.getByTestId('get');
  const postButton = utils.getByTestId('post');
  const putButton = utils.getByTestId('put');
  const deleteButton = utils.getByTestId('delete');

  return {
    setRequestParams,
    input,
    submit,
    getButton,
    postButton,
    putButton,
    deleteButton,
    ...utils,
  };
};

test('should render change to input', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'foo' } });
  expect(input.value).toEqual('foo');
});

test('should fire handleApiCall on click', () => {
  const { setRequestParams, submit } = setup();
  fireEvent.click(submit);
  expect(setRequestParams).toHaveBeenCalled();
});
