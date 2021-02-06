import React, { useEffect } from 'react';
import './App.scss';

import Header from '../Header';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import ErrorBoundary from '../ErrorBoundary';

const App = () => {
    useEffect(() => document.title = 'Abstract landing page');

    return (
        <ErrorBoundary>
            <Header />
            <About />
            <Portfolio />
            <Contact />
        </ErrorBoundary>
    )
}

export default App;