import React, {useState, useEffect} from 'react'
import { Home } from './components/Home'

export const AppContext = React.createContext()

const App = () => {

  const [items, setItems] = useState([]);

  const fetchData =() =>{
    fetch("http://localhost:4000/items")
    .then(res => res.json())
    .then(data => {
      setItems(data);
    })
    .catch(e=>console.log(e.message))
  }

  // arrow function tells the computer what you have to do when the data is first mounted on the computer
  useEffect(() => {
      fetchData()
  }, [])
  

  return (
    <>
    <AppContext.Provider value={{items, setItems}}>
       <Home/>
    </AppContext.Provider>
    
    </>
  )
}

export default App