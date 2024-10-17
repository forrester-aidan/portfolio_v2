import React from 'react'
import NavBar from './nav/NavBar'
import Welcome from './Welcome'
import IntroContainer from './IntroContainer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Welcome />
      <IntroContainer/>
    </div>
  )
}

export default Home
