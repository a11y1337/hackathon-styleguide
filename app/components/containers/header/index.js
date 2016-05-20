import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import * as categoryApi from '../../../api/category-api';
import store from '../../../store';
import s from '../../styles'
import Fa from 'react-fontawesome'
import HeaderView from '../../views/header'
// Using "Stateless Functional Components"
class Header extends Component {
  constructor(props) {
    super(props)
    this.setState = {
      selected: 'none'
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  componentDidMount() {
    categoryApi.getCategories()
  }
  clickHandler(option) {
    window.console.log(option);
    const { toggleSidebar } = this.props
    switch(option) {
      case 'sidebar':
        toggleSidebar
        break
      default:
        window.console.log('bad switch: /components/containers/header/index.js line 23');
    }
  }
  render() {
    return (
      <HeaderView categories={this.props.categories} clickHandler={this.props.sidebarHandler}/>
    );
  }
}


const mapStateToProps = function(store) {
  return {
    categories: store.categoryState.categories
  };
};

export default connect(mapStateToProps)(Header);
