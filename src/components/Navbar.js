import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button'

function Navbar() {
    const hardwareLinkUrl = "https://example.com";  // Replace with the actual URL
    //const cbmaLogoUrl = "path/to/cbma-logo.png";    
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [button, setButton] = useState(true)

    const handleclick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        const dropdownMenu = document.querySelector('.dropdown-menu')
        if (dropdownMenu && dropdownMenu.contains(document.activeElement)) {
            return
        }
    
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
        return () => {
            window.removeEventListener('resize', showButton)
        }
    }, [])

    return (
        <>
            <nav className='navbar' >
                <div className='navbar-container' >
                    <a href='/' target="_blank" rel="noopener noreferrer">
                        <div className='hardware-logo' onClick={closeMobileMenu} >
                            Hardware Store
                        </div>
                    </a>
                    <div className='menu-icon' onClick={handleclick} >
                        <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className='nav-item' >
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link to='/Products' className='nav-links' onClick={closeMobileMenu} >
                                Products
                            </Link>
                            <ul className={dropdown ? 'dropdown-menu active' : 'dropdown-menu'}>
                                <li className='dropdown-item' >
                                    <Link to='/products/category1' className='nav-links' onClick={closeMobileMenu} >
                                        Category 1
                                    </Link>
                                </li>
                                <li className='dropdown-item' >
                                    <Link to='/products/category2' className='nav-links' onClick={closeMobileMenu} >
                                        Category 2
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item' >
                            <Link to='/Services' className='nav-links' onClick={closeMobileMenu} >
                                Services
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/Contacts' className='nav-links' onClick={closeMobileMenu} >
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
