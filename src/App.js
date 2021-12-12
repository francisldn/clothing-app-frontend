import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { getDoc } from 'firebase/firestore';
// render the homepage for '/'
//
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  // we want to be aware when someone logs in and logs out
  // userAuth is null when signed out
  componentDidMount() {

    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const snapShot = await getDoc(userRef);

        this.setState({
              currentUser: {
                id: snapShot.id,
              ...snapShot.data()
              }
            })
        
    }
  })
}

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}
}

export default App;
