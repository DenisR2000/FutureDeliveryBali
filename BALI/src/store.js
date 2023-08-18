import {
    combineReducers,
    configureStore,
    getDefaultMiddleware
  } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import languageReducer from './redux/langSlice'

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    language: languageReducer
})

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store