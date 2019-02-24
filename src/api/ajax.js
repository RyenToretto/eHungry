import axios from "axios"

export default function (url, data={}, method="GET") {
  return new Promise((resolve, reject) => {
    let promise = null
    if(method==="GET"){
      promise = axios.get(url, {params: data})
    }else if(method==="POST"){
      promise = axios.post(url, data)
    }
    promise.then(response=>resolve(response.data)).catch(err=>console.log("ajax.js : "+err))
  })
}
