import myAxios from "..";

export function getDiscount (){
   return myAxios.get({
      url:'/home/discount'
   })
}