import '../index.css';
import Header from './Header.js';
import LeftSidebar from './LeftSidebar.js';
import RightSidebar from './RightSidebar.js';
import Content from './Content.js';

function App() {

    return (
        <div className="App">
            <LeftSidebar />
            <div className="page">
                <Header />
                <Content />
            </div>
            <RightSidebar />
        </div>
    )
}

export default App
