import React,{useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {commentlist} from './Actions/actions'

function CommentList(Props) {
   
    const store=useSelector(state=>state)
    const dispatch=useDispatch()
    const {commentList}=store

useEffect(()=>{
    dispatch(commentlist())
    console.log("action")

},[dispatch])
console.log(commentList)
    
    return (
        <div>
            <h1>Comment Detail</h1>
            
            { commentList.map((item,index)=><div style={{background:'grey', margin:'5px' ,padding:"5px" }} key={index}>
            <div>name: {item.name}</div>
            <div>body: {item.body}</div>
               

            </div>)}
            
        </div>
    )
}

export default CommentList
