import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './core/store/configureStore'; 
import App from './containers/App';

// styles
import '../node_modules/normalize.css/normalize.css';
import 'react-select/dist/react-select.css';
import './styles/react-select.css'; 
import './styles/react-split-pane.css';
import './styles/tachyons.css';  
import './styles/mockup.css'
import './styles/main.css'; 



const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
