import '../index.css';
import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import LeftSidebar from './LeftSidebar.js';
import RightSidebar from './RightSidebar.js';
import Content from './Content.js';

function App() {
    const [isMeanCICalcOpen, setIsMeanCICalcOpen] = useState<boolean>(false);
    const [isProportionCICalcOpen, setIsProportionCICalcOpen] = useState<boolean>(false);
    const [isQVCCalcOpen, setIsQVCCalcOpen] = useState<boolean>(false);

    function toggleMeanCIeCalc () {
        setIsMeanCICalcOpen(!isMeanCICalcOpen);
    }

    function toggleProportionCIeCalc () {
        setIsProportionCICalcOpen(!isProportionCICalcOpen);
    }

    function toggleQVCeCalc () {
        setIsQVCCalcOpen(!isQVCCalcOpen);
    }

    return (
        <div className="App">
            <LeftSidebar />
            <div className="page">
                <Header />
                <Content
                    isMeanCICalcOpen={isMeanCICalcOpen}
                    onClickMeanCICalc={toggleMeanCIeCalc}
                    isProportionCICalcOpen={isProportionCICalcOpen}
                    onClickProportionCICalc={toggleProportionCIeCalc}
                    isQVCCalcOpen={isQVCCalcOpen}
                    onClickQVCCalc={toggleQVCeCalc}
                />
            </div>
            <RightSidebar />
        </div>
    )
}

export default App
