import './Catalog/Catalog.css'

function CartGood ({ title, description }) {

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
            <div className="product-card">
                <div className='add-to__cart-like'>
                <span className="heart" onClick={onClickDetailInfo}></span>
                </div>
                <a href="#">
                <img id='image1' name='' src="https://m.media-amazon.com/images/I/611LgRlGDVL._AC_SR1472,1840__FMwebp_.jpg" alt="Product Image" />
                <div className="product__info">
                    <h4 className="product-title">{title}</h4>
                    <h4>{ description }</h4>
                    <div className='price__container'> 
                    <p className="product-price">$19.99</p>
                    <p className='sale_p'>40,5$</p>
                    </div>
                </div>
                </a>
            </div>
        </>
    )
}

export default CartGood;