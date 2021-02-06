import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../Navigation';
import ScrollDown from '../ScrollDown';
import './Header.scss';

const Header = () => {
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const header = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', setHeaderVisibility);

        return () => {
            window.removeEventListener('scroll', setHeaderVisibility);
        }
    }, [])

    const setHeaderVisibility = () => {
        const headerBottom = header.current.offsetTop + header.current.offsetHeight - 10;

        if (document.documentElement.scrollTop > headerBottom) {
            setIsHeaderHidden(true)
        } else {
            setIsHeaderHidden(false)
        }
    }


    return (
        <header className="header" id="home" ref={header}>
            <h1 className="visually-hidden">Abstract Landing Page</h1>
            <Navigation isHeaderHidden={isHeaderHidden} />
            <ScrollDown />
        </header>
    )
}


export default Header;