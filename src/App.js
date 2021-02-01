import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  const [{user}, dispatch] = useStateValue()
  console.log("user::",user)
  return (
    <div className="app">
      <Router>
      {!user ? (
        <Login/>
      ):(
        <>
          <Header/>
          <div className="app__body">
            <Sidebar/>
            <Switch>
              <Route exact path='/'>
                  <Chat/>
              </Route>
              <Route path='/room/:roomId'>
                  <Chat/>
              </Route>
            </Switch>
          </div>
        </>
      )}
      </Router>
    </div>
  );
}

export default App;
