// import axios from 'axios'

// const url = 'http://localhost:8888';
// const AuthenticationSignup = async(data)=>{
//     //since on fetching data error will ocuur therefore we use try and catch
//     try{
    
//         let response= await axios.post(`${url}/signin`,data,)
//         console.log(response)
//     }catch(error){
//         console.log("Error while calling signin api",error.message)
//     }
// }
// export default AuthenticationSignup

import axios from 'axios'

export const TransferDataToBackened= async(data)=>{
    try{
       
       return await axios.post('http://localhost:8888/signup', data)
      
    }catch(e){
        console.log("error while fetching data from signup",e.message)
    }
}
