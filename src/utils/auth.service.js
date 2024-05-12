import { getLocalStorage, removedFromLocalStorage, setTOLocalStorage } from "./locaStorage"
import { verifyToken } from "./verifyToken";

export const  storeUserInfo = ({accessToken})=>{
    return setTOLocalStorage('accessToken', accessToken)
 
 }

 export const getUserInfo = ()=>{
    const authToken = getLocalStorage('accessToken');
    if(authToken){
        const decodeData = verifyToken(authToken)

        return {
            ...decodeData
        }
    }

}

export const isLoggedIn = ()=>{
    const authToken = getLocalStorage('accessToken')
    if(authToken){
        return !!authToken
    }
}

export const removedUser = ()=>{
    return removedFromLocalStorage('accessToken')
}

