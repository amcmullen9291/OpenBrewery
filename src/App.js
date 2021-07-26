import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/MainPage';
import SelectedBrewery from './Components/SelectedBrewery';
import AllBreweries from './Components/AllBreweries'
import StateToState from './Components/StateToState'
import Welcome from './Components/Welcome'
import Signup from './Components/Signup'


function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Welcome}/>
          <Route path={"/CityBreweries"} exact component={Home}/>
          <Route path={"/CityBreweries/AllBreweries/:state/:name"} exact component={SelectedBrewery}/>
          <Route path={"/CityBreweries/AllBreweries"} exact component={AllBreweries}/>
          <Route path={"/CityBreweries/AllBreweries/:state"} exact component={StateToState}/>  
          <Route path={"/CityBreweries/Registation"} exact component={Signup}/>  
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;