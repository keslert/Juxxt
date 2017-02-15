import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './core/store/configureStore'; 
import App from './containers/App';

// styles
import '../node_modules/normalize.css/normalize.css';
import './styles/main.css'; 


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
