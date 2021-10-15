import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './context/AuthProvider';
import Signup from './components/Signup/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
