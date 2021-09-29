import AutoComplete from "./components/AutoComplete"; 
import Counter from "./components/Counter";
import './App.css';
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
     
      <Switch>
       <Route exact path="/">
       <Landing/>
        </Route>
        <Route exact path='/autocomplete'>
        <AutoComplete/>
        </Route>
        <Route exact path='/counter'>
        <Counter/>
        </Route>
      </Switch>
     </Router> 
    
    </div>
  );
}

export default App;
