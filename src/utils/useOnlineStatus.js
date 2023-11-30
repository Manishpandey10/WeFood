import { useEffect, useState } from "react"

export const useOnlineStatus=()=>{
    const[onlineStatus, setOnlineStatus]= useState(true
        )
    //checking if online/offline
    useEffect(()=>{
         window.addEventListener("offline", ()=>{
            setOnlineStatus(false)
         })
         window.addEventListener("online", ()=>{
            setOnlineStatus(true)
         })
    },[])

    return onlineStatus
}