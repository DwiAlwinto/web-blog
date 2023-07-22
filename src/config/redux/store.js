import {applyMiddleware, legacy_createStore}  from 'redux';

//import reducer dari file reducer
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';





const store = legacy_createStore(reducer, applyMiddleware(thunk)); //(applyMiddleware ini setelah kita insatll redux-thunk)

export default store;