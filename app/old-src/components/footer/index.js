import React from 'react'
import { Link } from 'react-router'
import s from '../../styles'
import Fa from 'react-fontawesome'

// Using "Stateless Functional Components"
export default function(props) {
  window.console.log(props)
  const {clickHandler} = props
  return (
    <header style={s.footerContainer}>
      <span style={s.logoContainer}>
        <Fa style={{ margin: 5, color: '#fff' }} name="star" size="3x" />
      </span>
      <div style={s.footerTitle}>
        <Link style={s.footerLink} to="/" activeClassName="active">Home</Link>
      </div>
      <div style={s.footerActionBar}>
        <div style={s.footerLink} activeClassName="active"><Fa name="search" /></div>
        <div style={s.footerLink} onClick={clickHandler('sidebar')} activeClassName="active"><Fa name="bars" /></div>
      </div>
    </header>
    );
}
