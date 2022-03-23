import { Cookies } from "react-cookie";

const cookies = new Cookies()

export const setCookie = (name:string, value:string, option?:any)=>{
    return cookies.set(name, value, {...option})
}

export const getCookie = (name:string)=>{
    return cookies.get(name)
}

export const removeCookie = (name:string)=>{
    return cookies.remove(name);
}

// import { getCookie, setCookie, removeCookie } from 'Cookie.ts';
// setCookie('USER',token,{
//     path:"/",
//     secure:true,
//     sameSite:"none",
//   });
//   console.log(getCookie("USER"));