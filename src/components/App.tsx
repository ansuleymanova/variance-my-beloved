import '../index.css';
import { useState, useEffect } from 'react';
import Header from './Header.js';
import LeftSidebar from './LeftSidebar.js';
import RightSidebar from './RightSidebar.js';
import Content from './Content.js';

function App() {
    const [isMeanCICalcOpen, setIsMeanCICalcOpen] = useState(false);
    return (
        <div className="App">
            <LeftSidebar />
            <div className="page">
                <Header />
                <Content isMeanCICalcOpen={isMeanCICalcOpen}/>
            </div>
            <RightSidebar />
        </div>
    )
}

export default App
