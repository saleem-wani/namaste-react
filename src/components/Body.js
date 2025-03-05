import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router";
const Body = () => {

    const [resList, setResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filtering, setFiltering] = useState([])
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch(
            " https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


        const json = await data.json()


        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFiltering(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)



    }


    return resList.length === 0 ? (
        <ShimmerUI />) :
        (
            <div className="body">
                <div className="filter">
                    <input type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}></input>
                    <button onClick={() => {
                        const filterRestuarant = resList.filter((res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFiltering(filterRestuarant)
                    }}>Search</button>
                    <button className="filter-btn" onClick={
                        function () {
                            const filteredList = resList.filter((res) => res.info?.avgRating > 4)
                            console.log("filtered===>>>", filteredList)
                            setResList(filteredList);

                        }

                    }>Top Rated Restaurant</button>
                </div>
                <div className="res-container">
                    {filtering.map((resData, index) => {

                        return <Link  key={resData.info.id}  to={"/restuarants/" + resData.info.id}><RestaurantCard resData={resData} /></Link>;
                    })}
                </div>
            </div>

        )
}
export default Body;