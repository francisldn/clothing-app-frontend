import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx'

const HatsPage = props => {
  console.log(props);
  <div>
    {/* <Link to='/topis'>Topics</Link> */}
    <button onClick = {() => props.history.push('/topics)>')}>Topics</button>
    <h1>SHOP PAGE</h1>
  </div>
}


// render the homepage for '/'
//
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
