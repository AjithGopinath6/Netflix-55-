import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import "./App.css"
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {originals, action, romance, horror} from './urls'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action Movies' isSmall/>
      <RowPost url={romance} title='Romance Movies' isSmall/>
      <RowPost url={horror} title='Horror Movies' isSmall/>
    </div>
  )
}

export default App
