import '../../assets/styles/components/Popup.css'

function Popup (){ 

    async function popupLoginCliseClick(){
        let popup = document.getElementById('popup')
        let popup_content = document.getElementById('popup__content')
        popup_content.classList.remove('animate')        
        popup.style.visibility = 'hidden'
        popup.style.opacity = 0
        popup.style.transition = "all 0.5s";
    }
    return (
        <>
        <div className="popup" id="popup">
            <div className="popup__body">
                <div style={{position: 'relative'}} id="popup__content" className="popup__content">
                    <a className="popup__close" onClick={popupLoginCliseClick} >X</a>
                    <div id="modal-content" className="modal-content">
                        <div className="big-news-container">
                            <p>
                                <br />
                            </p>
                            <p>
                                <span>
                                    <b id='title' className="title">
                                        
                                    </b>
                                </span>
                            </p>
                            <p>
                                <br />
                                <span>
                                    <b id='mainInfo' className='mainInfo'></b>
                                    <hr />
                                </span>
                            </p>
                        </div>
                            <p>
                                <br />
                                <span>
                                    <img id="img-news" className="img-news" />       
                                </span>
                            </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Popup