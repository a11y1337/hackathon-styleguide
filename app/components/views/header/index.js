import React from 'react'
import { Link } from 'react-router'
import s from '../../styles'
import Fa from 'react-fontawesome'

// Using "Stateless Functional Components"
export default function(props) {
  window.console.log(props)
  const {clickHandler} = props
  return (
    <header style={s.headerContainer}>
      <a href="/"><img src='/img/header-logo.png' /> Styleguide</a>
      <div onClick={clickHandler} style={{marginLeft: 'auto'}}><Fa name="bars" /></div>
    </header>
    );
}
