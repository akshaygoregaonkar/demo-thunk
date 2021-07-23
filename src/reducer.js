const reducer=(state={},action)=>{
    switch(action.type){
        case "COMMENT_SUCCESS":
            return {...state,commentList:action.payload}
        case "USER_SUCCESS":
            { console.log(action.payload)
            return{...state,userList:action.payload}}
    
    default:
        return state
    }
}
export default reducer