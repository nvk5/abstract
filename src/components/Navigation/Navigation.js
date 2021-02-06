import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Navigation.scss';


const Navigation = ({ isHeaderHidden }) => {
    const [navClass, setNavClass] = useState('nav');
    const [navListVisible, setNavListVisibility] = useState(false);
    const nav = useRef(null);

    const setNavVisibility = () => {
        const navBottom = nav.current.offsetTop + nav.current.offsetHeight * 2;

        if (document.documentElement.scrollTop > navBottom) {
            setNavClass('nav scroll-hide');
        } else {
            setNavClass('nav');
        }
    }

    useEffect(() => {
        const screenLg = !window.matchMedia("(max-width: 767.98px)").matches;

        if (screenLg) {
            if (isHeaderHidden) {
                setNavClass('nav scroll-show');
                window.removeEventListener('scroll', setNavVisibility);
            } else {
                window.addEventListener('scroll', setNavVisibility);
            }
          } 

        return () => {
            window.removeEventListener('scroll', setNavVisibility);
        }
    }, [isHeaderHidden])
    


    const toggleNav = () => {
        setNavListVisibility(prev => !prev);
    }

    return (
        <nav className={navClass} ref={nav}>
            <button className="nav__mob" onClick={toggleNav}>Menu</button>
            <ul className={navListVisible ? 'nav__list fadeIn' : 'nav__list'}>
                <li className="nav__item">
                    <a className="nav__link" href="#home">Home</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#about">About me</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}


Navigation.propTypes = {
    isHeaderHidden: PropTypes.bool
}

export default Navigation;