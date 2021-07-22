/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';

import './form.scss';

function Form({ setRequestParams }) {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    setRequestParams(formData);
  };

  function getMethod(e) {
    e.target.className
      ? e.target.className = ''
      : e.target.className = 'active';

    setMethod(e.target.textContent);
  }

  function getUrl(e) {
    setUrl(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input data-testid="input" name="url" type="text" value={url} onChange={getUrl} />
          <button id="submit" type="submit" data-testid="submit" onClick={handleSubmit}>GO!</button>
        </label>
        <label className="methods">
          <span
            id="get"
            role="button"
            data-testid="get"
            onClick={getMethod}
          >
            GET
          </span>
          <span
            id="post"
            role="button"
            data-testid="post"
            onClick={getMethod}
          >
            POST
          </span>
          <span
            id="put"
            role="button"
            data-testid="put"
            onClick={getMethod}
          >
            PUT
          </span>
          <span
            id="delete"
            role="button"
            data-testid="delete"
            onClick={getMethod}
          >
            DELETE
          </span>
        </label>
      </form>
    </>
  );
}

export default Form;
