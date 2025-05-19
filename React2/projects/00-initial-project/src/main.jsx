import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <Fragment>
    {/* COMENTARIO */}
      <span>Hola mundo!!</span>
      <span>HELLOOOOOOW</span>
  </Fragment>
  
)
