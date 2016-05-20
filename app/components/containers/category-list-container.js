import React from 'react';
import { connect } from 'react-redux';
import CategoryList from '../views/category-list';
import * as categoryApi from '../../api/category-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const CategoryListContainer = React.createClass({

  componentDidMount: function() {
    categoryApi.getCategories();
    store.dispatch(loadSearchLayout('categories', 'Category Results'));
  },
  render: function() {
    // let numOfCategories = this.props.categories.length
    // window.console.log(numOfCategories)
    return (
      <div>
        <CategoryList categories={this.props.categories} deleteCategory={categoryApi.deleteCategory} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    categories: store.categoryState.categories
  };
};

export default connect(mapStateToProps)(CategoryListContainer);
