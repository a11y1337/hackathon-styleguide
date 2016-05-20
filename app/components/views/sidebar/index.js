import React from 'react'
import { Link } from 'react-router'
import s from '../../styles'
import Fa from 'react-fontawesome'

// Using "Stateless Functional Components"
export default function(props) {
  window.console.log(props)
  return (
    <div style={s.sidebarContainer}>
    {props.categories.map(category => {
      return (
        <div key={category.id} style={s.sidebarItem}>
            <Link to={'/categories/' + category.id}>{category.name}</Link>
        </div>
      )
    })}
    </div>
  )
}
