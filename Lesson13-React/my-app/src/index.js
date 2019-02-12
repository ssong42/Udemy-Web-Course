import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App';
import { searchRobots } from './reducer';
import 'tachyons';

//Put the root reducer inside the createStore
//Applications get more and more complext and we can keep listing in the switch
//we will create one root recuces
const store = createStore(searchRobots);

ReactDOM.render(
                <Provider store={store}>
                    <App/>
                </Provider>, document.getElementById('root'));
                
serviceWorker.unregister();