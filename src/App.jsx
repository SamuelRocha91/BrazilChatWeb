import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Room from "./pages/Room"

function App() {
  return (
    <>
       <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/dashboard" component={ Dashboard }   />
        <Route path="/dashboard/:room" component={ Room }  />
      </Switch>
    </>
  )
}

export default App
