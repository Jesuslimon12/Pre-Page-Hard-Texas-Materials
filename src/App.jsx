import { useState } from 'react'
import Coming_Soon from './components/Coming-Soon'
import Img_Background from './img/background.svg'
import Footer from './components/Footer'

function App() {
  return (
    <div className='main-content'  style={{ backgroundImage:  `url(${Img_Background})`  }}>
       <Coming_Soon/>
       <Footer/>
    </div>
  )
}

export default App
