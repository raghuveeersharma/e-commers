import React from 'react'
import Navigation from './customer/component/navigation/Navigation'
import HomePage from './customer/pages/homepage/HomePage'
import Footer from './customer/component/Footer/Footer'

function App() {
  return (
    <div>
      <div>
        <Navigation/>
      </div>
      <div>
        <HomePage/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App

