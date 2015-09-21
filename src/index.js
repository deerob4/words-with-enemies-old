import React from 'react';
import { createStore, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import reducer from 'reducers/wordsWithEnemies';
import App from './containers/App';

const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
)(createStore);

const store = finalCreateStore(reducer);

if (module.hot) {
  module.hot.accept('reducers/wordsWithEnemies', () => {
    const nextReducer = require('reducers/wordsWithEnemies');
    store.replaceReducer(nextReducer);
  });
}

React.render(
  <div>
    <Provider store={store}>
      {() => <App />}
    </Provider>

  </div>,
  document.getElementById('root')
);
