import { combineReducers } from 'redux'

// Reducers
import searchLayoutReducer from './searchLayoutReducer'
import categoryReducer from './categoryReducer'
import mainLayoutReducer from './mainLayoutReducer'

// Combine Reducers
var reducers = combineReducers({
    searchLayoutState: searchLayoutReducer,
    categoryState: categoryReducer,
    mainLayoutState: mainLayoutReducer
})

export default reducers
