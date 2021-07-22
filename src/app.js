/* eslint-disable react/jsx-filename-extension */

// import React
import React, { useState, useEffect } from 'react';

// import style sheets
import './app.scss';

// import axios for http requests
import axios from 'axios';

// import components
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  const [data, setData] = useState();
  const [requestParams, setRequestParams] = useState({});

  const callApi = async (requestParamsObject) => {
    try {
      const response = await axios(requestParamsObject);
      setData(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(async () => {
    if (requestParams !== {}) {
      callApi(requestParams);
    }
  }, [requestParams]);

  return (
    <>
      <Header />
      <div data-testid="method">
        Request Method:
        {` ${requestParams.method}`}
      </div>
      <div data-testid="url">
        URL:
        {` ${requestParams.url}`}
      </div>
      <Form setRequestParams={setRequestParams} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
