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
          <input name='url' type='text' value={url} onChange={getUrl}/>
          <button type="submit" onClick={handleSubmit}>GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={getMethod}>GET</span> 
          <span id="post" onClick={getMethod}>POST</span>
          <span id="put" onClick={getMethod}>PUT</span>
          <span id="delete" onClick={getMethod}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
