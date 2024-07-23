import React from 'react'
 

export default function Header() {
    return (
        <header>

            <div className='signin_category'>
                <a href='#'><p> Sign In</p></a>
                <div>
                    <a href='#'>
                        <img src='/icons/menu.svg' alt='Menu'></img>
                        <p>Categories</p>
                    </a>
                </div>
            </div>

            <a href='/' className='logo_name'> CLOTHO </a>

            <div className='search_icons'>
                <div className='searchbar'>
                    <input type="text" placeholder="Search for anything"></input>
                    <button type="submit">
                        <img src='/icons/search.svg' alt='Search'></img>
                    </button>
                </div>
                <div className='icons'>
                    <div><a href='#'><img src='/icons/bell.svg'></img></a></div>
                    <div><a href='#'><img src='/icons/favorites.svg'></img></a></div>
                    <div><a href='#'><img src='/icons/cart.svg'></img></a></div>
                </div>
            </div>

        </header>
    )
}
