import RestaurantCard from "./RestaurantCard"
import restList from "../utils/mockData"
import { useState,useEffect } from "react";
const Body = () => {
    
      const[resList,setResList]=useState(restList);
       useEffect(()=>{
        fetchData();
       },[])

       const fetchData=async()=>{
        const data=await fetch(
            " https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        

            const json=await data.json()
          
            
           setResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
            // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            


       }
      
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={
                    function(){
                       const filteredList=resList.filter((res)=>res.info?.avgRating>4)
                       console.log("filtered===>>>",filteredList)
                       setResList(filteredList);

                    }

                }>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
            {resList.map((resData, index) => {
                
          return <RestaurantCard key={index} resData={resData} />;
        })}
            </div>
        </div>

    )
}
export default Body;