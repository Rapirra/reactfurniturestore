import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { cartReducer, favReducer } from './Reducer';


const saveToLocalStorage = (state) => {
    try {
      localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
  };
  
  const loadFromLocalStorage = () => {
    try {
      const stateStr = localStorage.getItem('state');
      return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  const rootReducer = combineReducers({
    cart: cartReducer,
    fav: favReducer
  });
  
  const persistedStore = loadFromLocalStorage();
  
  const store = createStore(rootReducer, persistedStore);
  
  store.subscribe(() => {
    saveToLocalStorage(store.getState());
  });
  
  export default store;


  

