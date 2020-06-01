import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route>
           <Home />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
