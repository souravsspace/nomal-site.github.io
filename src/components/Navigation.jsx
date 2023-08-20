import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiAlignLeft } from "react-icons/fi";


export default function Navigation(props) {


  const [navMenuFixed, seNavMenuFixed] = useState('')
  const [navValue, setNavValue] = useState('hide')

  const toggleNavigationBar = () => {
        if(navValue === 'hide'){ 
          setNavValue('show')
          seNavMenuFixed('fixed--toggle-btn')
        } else {
          setNavValue('hide')
          seNavMenuFixed('')
        }
  }

  return (
      <code className='container-fluid'>
          <nav className='container-fluid'>
          <ul>
            <li><strong>Sourav Ukil</strong></li>
          </ul>
          <ul className={`navbar--items ${navValue} mbl-${props.selectedTheme}`}>
            <li onClick={toggleNavigationBar}><Link to="/">{props.navNames.Home}</Link></li>
            <li onClick={toggleNavigationBar}><Link to={props.path.about}>{props.navNames.About}</Link></li>
            <li onClick={toggleNavigationBar}><Link to={props.path.portfolio}>{props.navNames.Portfolio}</Link></li>
            <li onClick={toggleNavigationBar}><Link to={props.path.contact} role="button">{props.navNames.Contact}</Link></li>
            <input type="checkbox" role="switch" 
            onChange={props.handleTheme}
            defaultChecked={props.selectedTheme === 'data-dark'}
            />
          </ul>
          <ul className='toggle--btn--ul'>
            <li onClick={toggleNavigationBar} className={`toggle--btn ${navMenuFixed}`}>
              <FiAlignLeft />
            </li>
          </ul>
          </nav>
      </code>
  )
}
