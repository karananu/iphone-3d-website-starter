import Nav from "./components/Nav";
import Jubotron from "./components/Jubotron";
import SoundSection from "./components/SoundSection";
import Display from "./components/Display";
 import WebgiViewer from "./components/WebgiViewer";
function App() {

  return (
    <div className="App">
     <Nav/>
     <Jubotron/>
     <SoundSection/>
     <Display/>
      <WebgiViewer/> 
    </div>
  );
}

export default App;
