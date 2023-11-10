import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Room from "./pages/Room"
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:3000');

function App() {
  return (
    <>
       <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route exact path="/dashboard">
          <Dashboard socket={socket}/>
        </Route>
        <Route path="/dashboard/:room">
          <Room socket={socket}/>
        </Route>
      </Switch>
    </>
  )
}

export default App
