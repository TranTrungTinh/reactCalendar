import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { Provider } from 'react-redux';
import store from './components/redux/store';
const rootDiv = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, rootDiv);
registerServiceWorker();
