import './app.scss'
import './dark-mode.scss'
import Header from './containers/header'
import {
  Main,
  Contacts,
  ForClients,
  About,
  Prices,
  Start,
  Works,
} from './pages'

import {BrowserRouter as 
Router,
Switch,
Route} from 'react-router-dom'

import { useState } from 'react'
import MObiHeader from './containers/mobile/header-mobile'

function App() {

  let BodyItem = document.querySelector('.body')


  const [darkMode, setDarkMode] = useState('');
  
  return (
    <Router>
      <div className="App">

      <Header/>
      <MObiHeader/>
    </div>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/works" component={Works}/>
      <Route exact path="/prices" component={Prices}/>
      <Route exact path="/forClients" component={ForClients}/>
      <Route exact path="/contacts" component={Contacts}/>
      <Route exact path="/Start a project" component={Start}/>
    </Switch>
    
    </Router>
  );
}

export default App;
