/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './form.scss';

function Form({ handleApiCall }) {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    handleApiCall(formData);
  };

  function getMethod(e){
    e.target.className ?
      e.target.className = '' :
      e.target.className = 'active';

    setMethod(e.target.textContent);
  }

  function getUrl(e) {
    setUrl(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="input" name='url' type='text' value={url} onChange={getUrl}/>
          <button type="submit" data-testid="submit" onClick={handleSubmit}>GO!</button>
        </label>
        <label className="methods">
          <span id="get" data-testid="get" onClick={getMethod}>GET</span> 
          <span id="post" data-testid="post" onClick={getMethod}>POST</span>
          <span id="put" data-testid="put" onClick={getMethod}>PUT</span>
          <span id="delete" data-testid="delete" onClick={getMethod}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
