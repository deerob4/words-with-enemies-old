import { createStore } from 'redux';
import reducer from 'reducers/wordsWithEnemies';

function configureStore(initialState) {
  const store = createStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers/wordsWithEnemies', () => {
      const nextReducer = require('../reducers/wordsWithEnemies');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default configureStore;
