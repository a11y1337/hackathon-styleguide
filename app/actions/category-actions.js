import * as types from '../actions/action-types';

export function getCategoriesSuccess(categories) {
  return {
    type: types.GET_CATEGORIES_SUCCESS,
    categories
  };
}

export function addCategorySuccess(category) {
  return {
    type: types.ADD_CATEGORY_SUCCESS,
    category
  };
}

export function deleteCategorySuccess(categoryId) {
  return {
    type: types.DELETE_CATEGORY_SUCCESS,
    categoryId
  };
}

export function categoryProfileSuccess(categoryProfile) {
  return {
    type: types.CATEGORY_PROFILE_SUCCESS,
    categoryProfile
  };
}
