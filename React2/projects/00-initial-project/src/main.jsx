import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// react va a renderizar siempre un unico elemento y ya dentor de ese elemento,
// podremos añadir todos los elementos que queramos 

root.render(
  <Fragment>
    <TwitterFollowCard/>
  </Fragment>
)
