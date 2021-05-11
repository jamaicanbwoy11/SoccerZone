import './App.scss';

import Header from './Components/Header/Header';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import HomePages from './Pages/HomePages/HomePages';
import ShoesBrand from './Pages/ShoesBrand/ShoesBrand';
function App() {
  return (
    <Router>
    <div className="App" >
      <Header/>
      <Switch>
        <Route path="/:id" component={ShoesBrand}/>
        <Route exact path="/" component={HomePages} />
      </Switch>
  
    </div>
    </Router>
  );
}

export default App;
