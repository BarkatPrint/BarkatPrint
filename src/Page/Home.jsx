import React from 'react'

import HomeImage from './HomeImage'             // Agar yeh component hai to sahi path do
import DigitalServices from '../Home/Digital/Services'
import PrintingServices from '../Home/Printing/PrintingServices'
import OurServices from './OurServices'
import Blog from './Blog'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <HomeImage />
      <DigitalServices />
      <PrintingServices />
      <OurServices />
      <Contact />
      <Blog />
    </div>
  )
}

export default Home
