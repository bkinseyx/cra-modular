import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

window.invokeReact = (): void => {
  document.querySelectorAll('.react-app').forEach((element, i) => {
    setTimeout(() => {
      const appName = String(element.getAttribute('data-app'));
      const appData = JSON.parse(String(element.getAttribute('data-custom')));
      ReactDOM.render(<App appName={appName} appData={appData} />, element);
    }, i * 2000);
  });
};
