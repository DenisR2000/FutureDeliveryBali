import { all } from 'redux-saga/effects'
import { watchChangeLanguageSaga } from './lang.saga'

export default function* rootSaga() {
    yield all([
      watchChangeLanguageSaga()
    ])
  }
  