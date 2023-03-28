import axios from "axios";
import { baseURL,timeout } from "./config";

 class myAxios  {
    constructor(baseURL,timeout){
       this.instance =axios.create({
        baseURL,
        timeout
       })

       this.instance.interceptors.response.use((res)=>{
         return res.data
       },(err)=>{
        return err
       })
    }

    request(config){
        return this.instance.request(config)
    }
    get(config){
        return this.instance.request({...config,method:'get'})
    }

    post(config){
        return this.instance.request({...config,method:'post'})
    }

    delet(config){
        return this.instance.request({...config,method:'delet'})
    }
 }
 
 export default new myAxios(baseURL,timeout)