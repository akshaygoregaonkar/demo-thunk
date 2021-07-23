import {createStore,applyMiddleware} from 'redux'
import reducer  from './reducer'
import thunk from 'redux-thunk'
const initialVal={
userList:[],
commentList:[]
}

const store=createStore(reducer,initialVal,applyMiddleware(thunk))


export default store