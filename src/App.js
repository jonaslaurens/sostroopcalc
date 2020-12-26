import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Container from '@material-ui/core/Container';

import Home from './components/navigation/Home';
import Troops from './components/troops/Troops';

const App = () => {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to="/troops" />
        <Route exact path="/:page?" render={props => <Home {...props} />} />
      </Switch>
    </>
  );
};

export default App;
