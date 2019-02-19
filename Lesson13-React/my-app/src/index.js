import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducer';
import 'tachyons';

//Put the root reducer inside the createStore
//Applications get more and more complext and we can keep listing in the switch
//we will create one root reducer
const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
                <Provider store={store}>
                    <App/>
                </Provider>, document.getElementById('root'));
                
serviceWorker.unregister();