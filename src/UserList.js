import React,{useEffect} from 'react'
import {userlist} from './Actions/actions'
import {useSelector,useDispatch} from 'react-redux'

function UserList() {
    const dispatch=useDispatch()
    const store=useSelector(state=>state)
    const {userList}=store
    useEffect(()=>{

        dispatch(userlist())
    },[dispatch])


    return (
        <div>
            <h1>User List</h1>
            {userList.map((item,index)=><div style={{margin:'5px',padding:'5px',background:'grey'}}key={index}>
                <div>{item.name}</div>
                <div>{item.email}</div>

            </div>)
            }
            
        </div>
    )
}
export default UserList
