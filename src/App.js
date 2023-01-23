

// // import logo from './logo.svg';
import Navbar from'./components/Navbar2';
import Navbar2 from'./components/Navbar3';
import Navbar3 from './components/Navbar4';
import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DashB from './components/pages/DashB'
import Client from './components/pages/Client'
import Mover from './components/pages/Mover'
import Delivery from './components/pages/Delivery'
import Order from './components/pages/Order'
import OrderSmn from './components/pages/OrderSmn'

import Pricing from './components/pages/PricingPage'

import ClientP from './components/pages/viewers/ClientP'
import DeliveryP from './components/pages/viewers/DeliveryP'
import OrderP from './components/pages/viewers/OrderP'
import MoverP from './components/pages/viewers/MoverP'
import Footer from './components/Footer'
import PricingPage from './components/pages/PricingPage';
import SignUp from './components/pages/SignupPage';
import Login from './components/pages/login';

// import useToken from './components/useToken';

import HomePage from './components/pages/HomePage'
import GlobalStyle from './globalStyles';
import useToken from './components/useToken';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));

}

function getToken() {

  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token

}
function App() {

  const { token, setToken } = useToken();
  
    // if(!token) {
    //   return(
    //     <Router>
    //       <GlobalStyle/>
    //       <Navbar2/>
    //       <Switch>
    //       <Route path='/' exact component= {HomePage}/>
    //       <Route path='/login' exact component= {<Login setToken={setToken} />2}/>
    //       <Route path='/signup' exact component= {SignUp}/>
    //       <Route path='/pricing' exact component= {PricingPage}/>
        
    //       </Switch>
    //       <Footer/>

    //     </Router>
    //   )
    // }
    // if(token == 'client') {
    //   return (

    //     <Router>
    //       <GlobalStyle/>
    //       <Navbar3/>
    //       <Switch>
    //       <Route path='/' exact component= {HomePage}/>
    //       <Route path='/pricing' exact component= {PricingPage}/>
    //       <Route path='/ordr' exact component= {OrderSmn}/>

    //       </Switch>
    //       <Footer/>

    //     </Router>


    //   )
    // }
    //   else{
        return (
          <Router>
              {/* <Route path='/' exact component= {Login}/> */}
                    <GlobalStyle />
            <Navbar/>
            <Switch>
              <Route path='/' exact component= {HomePage}/>
              <Route path='/dash' exact component= {DashB}/>
              <Route path='/clientele' exact component= {Client}/>
              <Route path='/moverr' exact component= {Mover}/>
              <Route path='/ordr' exact component= {OrderSmn}/>
              <Route path='/odr' exact component= {Order}/>
              <Route path='/delivs' exact component= {Delivery}/>
              <Route path='/clients' exact component= {ClientP}/>
              <Route path='/delivss' exact component= {DeliveryP}/>
              <Route path='/order' exact component= {OrderP}/>
              <Route path='/movers' exact component= {MoverP}/>
              <Route path='/signup' exact component= {SignUp}/>
              <Route path='/pricing' exact component= {PricingPage}/>

            </Switch>
            <Footer/>
          </Router>
        );
      }
      
      // }

export default App;

