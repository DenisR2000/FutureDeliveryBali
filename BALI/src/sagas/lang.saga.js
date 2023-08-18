import { takeEvery } from 'redux-saga/effects'
import { changeLang } from '../redux/langSlice'
import i18n from '../utils/i18n'
//import React from 'react'

//const [expanded, setExpanded] = React.useState(false)

function* changeLanguage(action) {
  try {
    yield i18n.changeLanguage(action.payload)
    //setExpanded(true)
  } catch (error) {
    console.warn(error)
  }
}

export function* watchChangeLanguageSaga() {
  yield takeEvery(changeLang, changeLanguage)
}
