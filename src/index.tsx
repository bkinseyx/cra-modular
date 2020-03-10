import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

const getReactAppData = (element: Element): {} => {
  const jsonId = element.getAttribute('data-json-id') ?? '';
  if (jsonId) {
    const content = String(document.getElementById(jsonId)?.innerHTML ?? '');
    return JSON.parse(content);
  }
  return JSON.parse(element.getAttribute('data-custom') ?? '');
};

window.invokeReact = (): void => {
  document.querySelectorAll('.react-app').forEach(element => {
    const appName = String(element.getAttribute('data-app'));
    const appData = getReactAppData(element);
    ReactDOM.render(<App appName={appName} appData={appData} />, element);
  });
};
