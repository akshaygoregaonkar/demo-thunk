import axios from 'axios'

 const secureAxios=axios.create({baseURL:'https://jsonplaceholder.typicode.com'})


//  secureAxios.interceptors.request.use(config=>{
//      config.headers['Authorization']='Barer Token'
//      return config
//  })

//  secureAxios.interceptors.response.use(response=>{
//      console.log("succuess",response)
//  },
//     error=>{
//         console.log("error",error
//         )
//         return new Promise.reject(error)


//     })

export default secureAxios