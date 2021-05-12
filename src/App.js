import './App.scss';

import Header from './Components/Header/Header';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import HomePages from './Pages/HomePages/HomePages';
import ShoesBrand from './Pages/ShoesBrand/ShoesBrand';
import { useEffect,useState } from 'react';
function App() {
  const [backToTop,setBackToTop] = useState(false);

  useEffect(()=>{

    window.addEventListener("scroll",()=>{
      if(window.scrollY > 180){
     
        setBackToTop(true);
      
      }else{
        setBackToTop(false);
      }
    })
  },[])
  return (
    <Router>
    <div className="app" >
      <Header/>
      <Switch>
        <Route path="/:id" component={ShoesBrand}/>
        <Route exact path="/" component={HomePages} />
      </Switch>
      { 
        backToTop &&   
          <div className="app__backToTop" onClick={()=>window.scrollTo({
            top:0,
            behavior:'smooth'
          })}>
            <h1>Back To Top</h1>
          </div>   
      }
    
   
    </div>
    </Router>
  );
}

export default App;
