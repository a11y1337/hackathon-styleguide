import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  categories: [],
  categoryProfile: {
    items: []
  }
};

const categoryReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_CATEGORIES_SUCCESS:
      return Object.assign({}, state, { categories: action.categories });

    case types.ADD_CATEGORY_SUCCESS:
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]
      // // Use lodash to create a new category array without the category we want to remove
      // const newCategory = _.concat(state.categories, action.category);
      // return Object.assign({}, state, { categories: action.category });

    case types.DELETE_CATEGORY_SUCCESS:

      // Use lodash to create a new category array without the category we want to remove
      const newCategories = _.filter(state.categories, category => category.id != action.categoryId);
      return Object.assign({}, state, { categories: newCategories });

    case types.CATEGORY_PROFILE_SUCCESS:
      return Object.assign({}, state, { categoryProfile: action.categoryProfile });

  }

  return state;

}

export default categoryReducer;
