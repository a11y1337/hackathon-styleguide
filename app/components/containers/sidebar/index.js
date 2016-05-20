import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import * as categoryApi from '../../../api/category-api';
import store from '../../../store';
import s from '../../styles'
import Fa from 'react-fontawesome'
import SidebarView from '../../views/sidebar'
// Using "Stateless Functional Components"
class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.setState = {
      selected: 'none'
    }
  }
  componentDidMount() {
    categoryApi.getCategories()
  }
  render() {
    return (
      <SidebarView categories={this.props.categories} clickHandler={this.clickHandler}/>
    );
  }
}


const mapStateToProps = function(store) {
  return {
    categories: store.categoryState.categories
  };
};

export default connect(mapStateToProps)(Sidebar);
