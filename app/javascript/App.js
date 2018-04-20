import React from 'react'
// import 'whatwg-fetch';
import { Redirect } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import Contact from './containers/Contact'
import NavigationBar from './components/NavigationBar';
import Photo from './containers/Photo'
import Prices from './containers/Prices'
import BreadCrumbs from './components/BreadCrumbs'


const App = props => {

  return(
    <BrowserRouter>
      <div>
        <NavigationBar />
          <Route exact path="/" render ={() => (<Redirect to="/home"/>)} /> 
          <Route path='/home' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/photo' component={Photo} />
          <Route path='/pricing' component={Prices} />
        <BreadCrumbs />
      </div>
    </BrowserRouter>
  )
}

export default App;
