import React from 'react';
import SwipeScreen from './components/SwipeScreen';  
import MatchScreen from './components/MatchScreen'; 
import './styles/App.css';  

function App() {
    return (
        <div className="App">
            {window.location.pathname === '/' && <SwipeScreen />}
            {window.location.pathname === '/matches' && <MatchScreen />}
        </div>
    );
}

export default App;


