import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <code className='container-fluid' style={{paddingBlock:'1rem'}}>
      <nav className='container-fluid'>
          <ul className='container footer--nav-items'>
            <Link style={{marginInline:"1rem"}} to="/">{props.navNames.Home}</Link>
            <Link style={{marginInline:"1rem"}} to={props.path.about}>{props.navNames.About}</Link>
            <Link style={{marginInline:"1rem"}} to={props.path.portfolio}>{props.navNames.Portfolio}</Link>
            <Link style={{marginInline:"1rem"}} to={props.path.contact}>{props.navNames.Contact}</Link>
          </ul>
          <small>copywrite 2019-20 @souravukil</small>
      </nav>
    </code>
  )
}
