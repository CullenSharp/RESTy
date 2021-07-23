/* eslint-disable react/jsx-filename-extension */

// import React
import React, { useEffect, useReducer } from 'react';

// import style sheets
import './app.scss';

// import axios for http requests
import axios from 'axios';

// import components
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const initialState = {
  requestParams: {},
  data: {},
  history: [],
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_REQUEST_PARAMS':
      return { ...state, requestParams: { ...action.payload } };
    case 'ASSIGN_DATA':
      return { ...state, data: { ...action.payload } };
    case 'UPDATE_HISTORY':
      return { ...state, history: [...action.payload] };
    case 'TOGGLE_LOAD':
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const callApi = async (requestParams) => {
    try {
      const response = await axios(requestParams);

      const action = {
        type: 'ASSIGN_DATA',
        payload: response,
      };

      dispatch(action);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    if (state !== {}) {
      callApi(state.requestParams);
    }
  }, [state.requestParams]);

  return (
    <>
      <Header />
      <div data-testid="method">
        Request Method:
        {` ${state.requestParams.method}`}
      </div>
      <div data-testid="url">
        URL:
        {` ${state.requestParams.url}`}
      </div>
      <Form setRequestParams={dispatch} />
      { Object.keys(state.data).length && <Results data={state.data} /> }
      <Footer />
    </>
  );
}

export default App;
