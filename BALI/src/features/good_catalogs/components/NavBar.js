import  '../styles/NavBar.css'

function NavBar() {
    return(
        <>
            <nav className="sort__bar">
                <span className="subtitle__selection z">Narrow Choices</span>
                <div className='item__sort'>
                    <input className="search__input" placeholder='Search Top Size'/>
                    <ul className="select__option-ul">
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>XXL</li>
                    <li>66</li>
                    <li>40</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>XXL</li>
                    <li>66</li>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>XXL</li>
                    <li>66</li>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>XXL</li>
                    <li>66</li>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>XXL</li>
                    <li>66</li>
                    </ul>
                </div>

                <div className='block'>
                    <div className='bloch__item'>
                    <div id="block__title" className='block__title'>Title 1</div>
                    <div className='block__text'>
                        Some option to select
                    </div>
                    </div>
                    <div className='bloch__item'>
                    <div id="block__title" className='block__title'>Title 2</div>
                    <div className='block__text'>
                        Some option to select
                    </div>
                    </div>
                    <div className='bloch__item'>
                    <div id="block__title" className='block__title'>Title 3</div>
                    <div className='block__text'>
                        Some option to select
                    </div>
                    </div>
                    <div className='bloch__item'>
                    <div id="block__title" className='block__title'>Title 4</div>
                    <div className='block__text'>
                        Some option to select
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;