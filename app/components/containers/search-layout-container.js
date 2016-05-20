import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../layouts/search-layout';

const mapStateToProps = function(store) {

  let searchType = store.searchLayoutState.searchType;
  let totalResults = 0

  switch(searchType) {
    case 'categories':
      totalResults = store.categoryState.categories.length
      break
    default:
      totalResults = totalResults
  }

  return {
    searchType,
    title: store.searchLayoutState.title,
    totalResults
  };

};

export default connect(mapStateToProps)(SearchLayout);
