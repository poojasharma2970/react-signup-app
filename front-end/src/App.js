import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';

const App = () => {
   return (
      <>
         <Navbar />

         <Route exact path="/">
            <Home />
         </Route>

         <Route path="/signup">
            <Signup />
         </Route>

         <Route path="/signin">
            <Signin />
         </Route>
      </>
   );
}

export default App;
