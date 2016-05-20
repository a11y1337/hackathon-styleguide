import React from 'react';
import { connect } from 'react-redux';
import CategoryProfile from '../views/category-profile';
import * as categoryApi from '../../api/category-api';

const CategoryProfileContainer = React.createClass({

  componentDidMount: function() {
    let categoryId = this.props.params.categoryId
    categoryApi.getProfile(categoryId)
  },

  render: function() {
    return (
      <CategoryProfile {...this.props.profile} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    profile: store.categoryState.categoryProfile
  };
};

export default connect(mapStateToProps)(CategoryProfileContainer);
