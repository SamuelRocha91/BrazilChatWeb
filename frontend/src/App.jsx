import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Room from "./pages/Room"
import socketIO from 'socket.io-client';
import { ContextProvider } from "./SocketContext.jsx";


// cria uma instância de socket.io para ser passada entre os componentes para permitir eventos de comunicação com o backend
const socket = socketIO.connect('http://localhost:3000');

// cria uma função app que abrange as rotas da aplicação: / para a página inicial, /login para o usuário logar no site,
// /dashboard para escolha de uma sala e /dashboard:room para a sala específica
function App() {
  return (
    <>
       <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route exact path="/dashboard">
          <Dashboard socket={socket}/>
        </Route>
        <ContextProvider>
        <Route path="/dashboard/:room">
          <Room socket={socket}/>
        </Route>
        </ContextProvider>
      </Switch>
    </>
  )
}

export default App
