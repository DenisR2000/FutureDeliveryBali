import React, { useEffect, useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { changeLang } from '../../redux/langSlice'

const LanguageComponent = () => {
  const language = sessionStorage.getItem('lang')
  const [lang, setLang] = useState(language)

  const dispatch = useDispatch()

  useEffect(() => {
    if (language == null) {
      //setLang('ru')
      sessionStorage.setItem('lang', 'ru')
    }
    if (language === 'ua') {
      dispatch(changeLang(language))
    }
   }, [lang])

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // отправка данных формы на сервер
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} sm="auto">
            {/* <h6>Мова</h6> */}
          </Col>
          <Col xs={12} sm="auto">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="language"
                id="ukrainian"
                value="uk"
                checked={language === 'uk'}
                onChange={handleLanguageChange}
              />
              <label className="form-check-label" htmlFor="ukrainian">UA</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="language"
                id="english"
                value="en"
                checked={language === 'en'}
                onChange={handleLanguageChange}
              />
              <label className="form-check-label" htmlFor="english">UK</label>
            </div>
          </Col>
          <Col xs={12} sm="auto">
            {/* <button className="btn btn-link" type="submit">Зберегти</button> */}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default LanguageComponent;




// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { changeLang } from '../../redux/langSlice'


// const LanguageComponent = () => {
//   const language = sessionStorage.getItem('lang')
//   const [lang, setLang] = useState(language)

//   const dispatch = useDispatch()

//   useEffect(() => {
//     if (language == null) {
//       //setLang('ru')
//       sessionStorage.setItem('lang', 'ru')
//     }
//     if (language === 'ua') {
//       dispatch(changeLang(language))
//     }
//   }, [lang])

//   return (
//     <select
//       onChange={(e) => {
//         e.preventDefault()
//         console.log("onChange")
//         dispatch(changeLang(e.target.value))
//         setLang(e.target.value)
//         sessionStorage.setItem('lang', e.target.value)
//       }}
//       value={lang}
//     >
//       <option value="ru">Русский</option>
//       <option value="ua">Український</option>
//     </select>
//   )
// }

// export default LanguageComponent