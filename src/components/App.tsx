import '../App.css'
import LeftSidebar from './LeftSidebar.js';
import RightSidebar from './RightSidebar.js';
import Content from './Content.js';

function App() {

  return (
    <div className="App">
      <LeftSidebar />
      <Content />
      <RightSidebar />
    </div>
  )
}

export default App
