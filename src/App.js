import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import MemberShip from './components/MemberShip/MemberShip';
import Classes from './components/Classes/Classes';
import ClassesDetails from './components/Classes/ClassesDetails';
// import AboutUs from './components/AboutUs/AboutUs';
// import Services from './components/Services/Services';
// import Contact from './components/ContactUs/Contact';
// import Blog from './components/Blog/Blog';


function App() {
  return (
    <div>
     <Router>

       <Switch>

        <Route exact path='/' component={Home} />

        <Route path='/pricing' component={Pricing} />

        <Route path='/membership' component={MemberShip} />

        <Route path="/services" component={Home} />

        <Route path="/contact" component={Home} />

        <Route path="/blog" component={Home} />

        <Route path="/about" component={Home} />

        <Route path='/classes' component={Classes} />

        <Route path='/classes/:id' component={ClassesDetails} />

       </Switch>

     </Router>
    </div>
  );
}

export default App;
