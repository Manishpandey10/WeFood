import { useEffect, useState } from "react"
import { MENU_API } from "./constants";

const useMenu=(resId)=>{
    const [resInfo, setResInfo] = useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const menuData = await data.json();

        console.log(menuData.data);

        setResInfo(menuData.data);

        console.log(resInfo);
      };
    return resInfo
    
}


export default useMenu