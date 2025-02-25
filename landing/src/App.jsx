import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {
  const [count, setCount] = useState(0)
  const fruits = [{id: 1, name:"apple",calories:50},
                  {id: 2, name:"orange",calories:200},
                  {id: 3, name:"coconut",calories:300}];

  const veggies = [{id: 4, name:"spinach",calories:50},
                  {id: 5, name:"potato",calories:120},
                  {id: 6, name:"celerey",calories:25}];

  return (
    <>
      <Header />
      <Food />
      <UserGreeting isLoggedIn={false} username="Isaiah" />

      {fruits.length > 0  && <List items={fruits} category="Fruits"/>}
      {veggies.length > 0 && <List items={veggies} category="Veggies" />}
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Card />
      <Footer />
      <Student name="Spongebob" age={30} isStudent={true} />
    </>
  )
}

export default App
