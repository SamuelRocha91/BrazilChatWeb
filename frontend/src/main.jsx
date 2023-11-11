import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// cria aplicação react com rotas
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
