import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiAlignLeft } from "react-icons/fi";


export default function Navigation(props) {
  const [navValue, setNavValue] = useState('hide')

  const toggleNavigationBar = () => {
        (navValue === 'hide') ? setNavValue('show') : setNavValue('hide')
  }

  return (
      <code className='container-fluid' data-theme={props.dataTheme}>
          <nav className='container-fluid'>
          <ul>
            <li><strong>Sourav Ukil</strong></li>
          </ul>
          <ul className={`navbar--items ${navValue}`}>
            <li onClick={toggleNavigationBar}><Link to="/">{props.navNames.Home}</Link></li>
            <li onClick={toggleNavigationBar}><Link to="/about">{props.navNames.About}</Link></li>
            <li onClick={toggleNavigationBar}><Link to="/portfolio">{props.navNames.Portfolio}</Link></li>
            <li onClick={toggleNavigationBar}><Link to="/contact" role="button">{props.navNames.Contact}</Link></li>
            <input type="checkbox" role="switch" 
            onChange={props.handleTheme}
            defaultChecked={props.selectedTheme === 'data-dark'}
            />
          </ul>
          <ul className='toggle--btn--ul'>
            <li onClick={toggleNavigationBar} className='toggle--btn'>
              <FiAlignLeft />
            </li>
          </ul>
          </nav>
      </code>
  )
}
