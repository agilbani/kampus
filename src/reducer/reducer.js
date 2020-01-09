import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// @start app reducer
const APP_STATE = {
   data: null
};

const appReducer = (state = APP_STATE, action) => {
   switch(action.type) {
      case 'APP_RESET':
         return {
            ...state,
            data: null
         }

      default: 
         return state;
   }
};

const appPersistConfig = {
   key: 'app',
   storage: storage
};
// @stop

const rootPersistConfig = {
   key: 'root',
   storage: storage,
   blacklist: ['navigation']
};

const rootReducer = combineReducers({
   app: persistReducer(appPersistConfig, appReducer)
});

export default persistReducer(rootPersistConfig, rootReducer);