import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ScrollDownWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 767.98px) {
        display: none;
    }
`

const ScrollDownDesc = styled.span`
    font-family: 'Open Sans', sans-serif;
    font-size: 1.125rem;
    margin-bottom: 15px;
    text-transform: uppercase;
    color: ${props => props.main ? '#707070' : '#f1f1f1'};
    letter-spacing: 0.01em;
`

const ScrollDownButton = styled.button`
    width: 32px;
    height: 32px;
    margin: auto;

    &:hover,
    &:focus {
        animation: animate .5s linear infinite alternate;
    }

    svg {
        fill: ${props => props.main ? '#707070' : '#f1f1f1'};
    }
`

const ScrollDown = ({ text, main }) => {
    const scrollBtn = useRef(null);

    const scrollDown = () => {
        const scrollTarget = scrollBtn.current.closest('[id]').nextSibling;

        if (scrollTarget) {
            const targetOffsetTop = scrollTarget.offsetTop;
            document.documentElement.scrollTop = targetOffsetTop;
        }
    }

    return (
        <ScrollDownWrap>
            <ScrollDownDesc main={main || null}>{text}</ScrollDownDesc>
            <ScrollDownButton main={main || null} onClick={scrollDown} ref={scrollBtn}>
                <svg viewBox="0 0 26 26"><g><polygon points="0.046,2.582 2.13,0.498 12.967,11.334 23.803,0.498 25.887,2.582 12.967,15.502  " /><polygon points="0.046,13.582 2.13,11.498 12.967,22.334 23.803,11.498 25.887,13.582 12.967,26.502  "/></g></svg>
            </ScrollDownButton>
        </ScrollDownWrap>
    )
}

ScrollDown.propTypes = {
    text: PropTypes.string,
    main: PropTypes.bool
}

ScrollDown.defaultProps = {
    text: 'Scroll down to see more'
}

export default ScrollDown;