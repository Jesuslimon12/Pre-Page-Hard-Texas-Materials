import React from 'react'
import Icon_phone from '../img/phone.svg'
import Icon_mark from '../img/mark.svg'
import '../styles/Footer.css'
export default function Footer() {
  return (
    <footer className='footer'>
        <ul className='footer__info'>
            <li><img src={Icon_mark} alt="Icon mark" className='footer__icon'/> 524 W Expressway 83, Donna, TX</li>
            <li><img src={Icon_phone} alt="Icon phone" className='footer__icon'/> (956) 777 2654</li>
        </ul>
        
        <a href="#" className='footer__page'>www.hardtexasmaterials.com</a>
    </footer>
  )
}
