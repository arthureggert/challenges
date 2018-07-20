import 'typeface-roboto';

import React from 'react';
import ReactDOM from 'react-dom';
import { history, store } from './Store/store';
import Application from './Container/Application/Application';
import registerServiceWorker from './ServiceWorker/registerServiceWorker';

ReactDOM.render(<Application store={store} history={history} />, document.getElementById('root'));
registerServiceWorker();