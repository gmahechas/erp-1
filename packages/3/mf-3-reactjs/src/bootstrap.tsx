import React from 'react';
import ReactDOM from 'react-dom';
import {
    createBrowserHistory,
    History,
    createMemoryHistory,
    MemoryHistory,
    Location,
} from 'history';

import '@gmahechas/common-webcomponents/dist/common-webcomponents/common-webcomponents.css';
import {
    applyPolyfills,
    defineCustomElements,
} from '@gmahechas/common-webcomponents/loader';

import '@mf-3/index.css';
import Core from '@mf-3/core/containers/Core';

const mount = (
    element: HTMLElement,
    {
        onNavigate,
        defaultHistory,
        initialPath,
    }: {
        onNavigate?: () => void;
        defaultHistory: History | MemoryHistory;
        initialPath: string;
    }
) => {
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        });
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <React.StrictMode>
            <Core history={history} />
        </React.StrictMode>,
        element
    );

    applyPolyfills().then(() => {
        defineCustomElements();
    });

    return {
        onParentNavigate({ pathname: nextPathname }: Location) {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        },
    };
};

if (process.env.NODE_ENV === 'development') {
    const element = document.getElementById('_mf-3-root');
    if (element) {
        mount(element, {
            defaultHistory: createBrowserHistory(),
            initialPath: '',
        });
    }
}

export { mount };
