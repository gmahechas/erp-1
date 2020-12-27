import React from 'react';
import ReactDOM from 'react-dom';

import '@mf-2/index.css';
import Core from '@mf-2/core/containers/Core';

const mount = (element: HTMLElement) => {
  ReactDOM.render(
    <React.StrictMode>
      <Core />
    </React.StrictMode>,
    element
  );
};

if (process.env.NODE_ENV === 'development') {
  const element = document.getElementById('_mf-2-root');
  if (element) {
    mount(element);
  }
}

export { mount };
