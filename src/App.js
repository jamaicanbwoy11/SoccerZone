import './App.scss';
import Carousel from './Components/Carousel/Carousel';
import Header from './Components/Header/Header';
import Shoe from './Components/Shoe/Shoe';

function App() {
  return (
    <div className="App" >
      <Header/>
      <Carousel/>
      <Shoe/>
    </div>
  );
}

export default App;
