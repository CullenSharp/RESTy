/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import './results.scss';

function Results({ data }) {
  return (
    <section className="results">
      <h2>Headers</h2>
      <pre data-testid="headers">{data ? JSON.stringify(data.config.headers, undefined, 2) : null}</pre>

      <h2>Results</h2>
      <pre data-testid="results">{data ? JSON.stringify(data.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
