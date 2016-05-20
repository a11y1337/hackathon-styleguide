import axios from 'axios';
import store from '../store';
import { getCategoriesSuccess, addCategorySuccess, deleteCategorySuccess, categoryProfileSuccess } from '../actions/category-actions';


export function getCategories() {
  return axios.get('http://localhost:3001/categories')
    .then(response => {
      store.dispatch(getCategoriesSuccess(response.data));
      return response;
    });
}


export function searchCategories(query = '') {
  return axios.get('http://localhost:3001/categories?q='+ query)
    .then(response => {
      store.dispatch(getCategoriesSuccess(response.data));
      return response;
    });
}

export function addCategory(category) {
  return axios.post('http://localhost:3001/categories/', category)
    .then(response => {
      store.dispatch(addCategorySuccess(category));
      window.console.log('category added: ' + category)
      return response;
    });
}


export function deleteCategory(categoryId) {
  return axios.delete('http://localhost:3001/categories/' + categoryId)
    .then(response => {
      store.dispatch(deleteCategorySuccess(categoryId));
      return response;
    });
}



export function getProfile(categoryId) {

  let profile = {};

  return axios.get('http://localhost:3001/categories/' + categoryId)
    .then(response => {

      let category = response.data;
      profile.name = category.name;
      profile.id = category.id;
      profile.desc = !category.desc ? 'No description available' : category.desc;
      profile.items = !category.items ? 'No items available' : category.items;

      store.dispatch(categoryProfileSuccess(profile))
      return

    });

}
