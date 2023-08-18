import Popup from "../../../../components/forms/Popup"
import './Catalog.css'
import $ from 'jquery';
import { useEffect, useState } from 'react'
import { useParams } from "react-router";
import CartGood from "../CartGoodd";
import NavBar from "../NavBar";

function Catalog() {

    const [shouldReload] = useState(false);
    let { catalogId } = useParams();

    useEffect(() => {
      // replace 'container' with the ID of your container element
      const container = document.getElementById('main__container'); 
      container.style.minHeight = window.innerHeight + 'px';  
      
      console.log("catalogId: ", catalogId)

      const backToTopButton = document.querySelector("#back-to-top");
      backToTopButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      })

      window.addEventListener("scroll", () => {
          if (window.scrollY > 500) {
            backToTopButton.classList.add("show");
          } else {
            backToTopButton.classList.remove("show");
          }
      })

      $('.block__title').click(function() {
        $(this).toggleClass('active').next().slideToggle(300)
        })
    })

    function onMouseEnterImage(e) {
      var elements = document.getElementById(e.target.id)
      elements.style.height = "263px"
      elements.style.width = "210px"
      elements.src = "https://m.media-amazon.com/images/I/71bT1sczcaL._AC_SR768,1024__FMwebp_.jpg"
    }
  
    function onMouseLeveImage(e) {
      var elements = document.getElementById(e.target.id)
      elements.style.height = "263px"
      elements.style.width = "210px"
      elements.src = "https://m.media-amazon.com/images/I/611LgRlGDVL._AC_SR1472,1840__FMwebp_.jpg"
    }
  
  
    async function onClickDetailInfo(){
      let popup = document.getElementById('popup')
      let popup_content = document.getElementById('popup__content')
      popup.style.visibility = 'visible'
      popup.style.opacity = 1
      popup_content.classList.add('animate')
      popup.style.transition = "all 0.5s"; 
    }

    return(
        <>
          <Popup />
          <main id="main__container" className="main__container">
          <div className="map___container">
            <div className='title__container'>
              <div>
              <h2 className='title'>Men's XS Size Products</h2>
              <span className='span'>477 items found</span>
              </div>

            <div className="sort-by__container">
                
                <div className="select-wrapper">
              
                <div className="select-wrapper">
                  <select className="select-dropdown">
                      <option value="" disabled selected>Select an option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <span className="select-arrow"></span>
                    <div className="options-wrapper">
                      <div className="option">Option 1</div>
                      <div className="option">Option 2</div>
                      <div className="option">Option 3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <main className="main__container">
              <NavBar />

              <div className="row cards-row cart__container">
                <div className="option__bblock">
                  <h3 className="subtitle__selection">Your Selections</h3>
                  <div id='search__selected__аilters' className="search__selected__аilters">
                    <a className="history__selection_black">
                      Одежда
                      <span className="close"></span>
                    </a>
                    <a className="history__selection_black">
                      Футболки
                      <span className="close"></span>
                    </a>
                  </div>
                </div>
                <CartGood title="Champion" description="Clasic Jersey Tee"/>
                <CartGood title="Champion" description="Clasic Jersey Tee"/>
                <CartGood title="Champion" description="Clasic Jersey Tee"/>
                <CartGood title="Champion" description="Clasic Jersey Tee"/>
              </div>

              <button id="back-to-top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9.293 16.707l-1.414-1.414L12 10.586l4.121 4.121-1.414 1.414L12 13.414 9.293 16.707z"/>
                </svg>
              </button>
            </main>
          </div>
          </main>
        </>
    )
}
export default Catalog