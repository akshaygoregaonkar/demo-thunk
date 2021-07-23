import  secureAxios from './AxiosConfig/secureAxios'
export const commentlist=()=>async(dispatch)=>{
    try{
       const data= await secureAxios({
            url:'/comments',
            method:'GET'}).then(response=>response.data)
        console.log(data)

     dispatch({type:"COMMENT_SUCCESS",payload:data})

    }catch(error){
        console.log(error)
    }


}


export const userlist=()=>async(dispatch)=>{

    try{
        const data = await secureAxios({
            url:'/users',
            method:'GET'
        }).then(res=>res.data)

        dispatch({type:"USER_SUCCESS",payload:data})

    }catch(error){

        console.log(error)
    }
}