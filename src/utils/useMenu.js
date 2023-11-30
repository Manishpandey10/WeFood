import { useEffect, useState } from "react"
import { MENU_API } from "../Utils/constants";

const useMenu=(resId)=>{
    const [resInfo, setResInfo] = useState([]);
    
    useEffect(()=>{
        fetchMenu();
    },[])


    const fetchMenu = async () => {
        const data = await fetch(
         "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.6339793&lng=74.8722642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"+resId
        );
        const menuData = await data.json();
    
        console.log(menuData.data,cards);
        setResInfo(menuData.data.cards);
        console.log(resInfo);
      };



    return resInfo
}

export default useMenu