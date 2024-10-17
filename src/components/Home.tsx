import React from 'react'
import NavBar from './nav/NavBar'
import Welcome from './Welcome'
import IntroContainer from './intro/IntroContainer'
import RecruiterContainer from './to_recruiter/RecruiterContainer'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Welcome />
      <IntroContainer/>
      <RecruiterContainer/>
    </div>
  )
}

export default Home
