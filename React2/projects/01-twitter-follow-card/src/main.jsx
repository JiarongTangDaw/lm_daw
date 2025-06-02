import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

//import { Task } from './Task.jsx'



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const format = (userName) =>{return `@${userName}`}

// react va a renderizar siempre un unico elemento y ya dentor de ese elemento,
// podremos añadir todos los elementos que queramos (etiquetas, componentes, etc...)

      // <TwitterFollowCard name={"Cucu"} userName={"cucu"} initialIsFollowing={true}/>
      // <TwitterFollowCard name={"John"} userName={"john"} initialIsFollowing={true}/>
      // <TwitterFollowCard name={"Homer"} userName={"homer"} initialIsFollowing={false}/>
      // <TwitterFollowCard/>

const users = [
  {
    id: 1,
    name: "Sharik",
    userName: "sharik",
    isFollowing: false
  },
  {
    id: 2,
    name: "Tony",
    userName: "tony",
    isFollowing: true
  },
  {
    id: 3,
    name:"David",
    userName: "david",
    isFollowing: false
  },
  {
    id: 4,
    name: "Jia",
    userName: "jia",
    isFollowing: true
  }
]

// users.forEach(user => 
//   {
//     return (
//       <TwitterFollowCard 
//         name={user.name} 
//         userName={user.userName} 
//         initialIsFollowing={user.isFollowing}
//       />
//     );
//   })

root.render(
  <>
    <div className='App'>
      {
       users.map(user => {
        const {id,userName,name, isFollowing} = user;

        return(
          <TwitterFollowCard 
            key = {id} 
            name = {name} 
            userName = {userName} 
            isFollowing = {isFollowing}
          />
       )
       })
      }
    </div>
  </>
)
