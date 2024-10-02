import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSlideBarToggling } from '../store/configSlice';
import { Link } from 'react-router-dom';
import { SEARCH_SUGGESTIONS_API } from '../utils/constants';
import { cache } from '../store/searchSlice';


const Header = () => {

const dispatch = useDispatch();
const [searchQuery,setSearchQuery] = useState("");
const [suggestions, setSuggestions] = useState([]);
const [showSuggestions, setShowSuggestions] = useState(false);
const searchcache = useSelector(store=>store.search)

 useEffect(() => {
  if (searchQuery) {
    const timer = setTimeout(()=>
    {
      if(searchcache[searchQuery]){
        setSuggestions(searchcache[searchQuery])
      }
      else{
        searchSuggestion()
      }
    }
       ,200);

    return()=>{
     clearTimeout(timer);
    }
  }


}, [searchQuery]);

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const searchSuggestion = async ()=> {
  const response = await fetch (CORS_PROXY+SEARCH_SUGGESTIONS_API+searchQuery);
  const json = await response.json();
  
  setSuggestions(json[1])
  
     dispatch(cache({
      // [ip] :["iphone","iphone14"]
      [searchQuery]:json[1],
    }));
  
 
}


const handleSlideBar =()=>{
 dispatch(addSlideBarToggling())
}

  return (
    <div className="grid  grid-flow-col p-2 gap-4">
      <div className="col-span-2 flex items-center">
       <img
          className="h-10"
          alt="hamburger-icon"
          src="https://cdn1.iconfinder.com/data/icons/mail-user-phone-search-and-others-doodle-drawing-l/24/icon_bars-menu-hamburger-512.png"
         onClick={handleSlideBar}
        />
        <img
          className="h-6 pt-1 px-4"
          alt="youtube-icon"
          src="https://th.bing.com/th/id/OIP.LxennqBfFCq4bJXDdHXfuAHaBp?rs=1&pid=ImgDetMain"
        /> 
      </div>
      <div className="col-span-8 relative flex items-center justify-center">
  <div className="flex w-1/2 relative">
    <input
      type="text"
      placeholder="Search"
      className="border border-gray-500 w-full h-10 rounded-l-full p-2"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onFocus={()=>setShowSuggestions(true)}
      onBlur={()=>setShowSuggestions(false)}
    />
    <button>
      <img
        className="h-10 border border-gray-500 rounded-r-full"
        alt="search-icon"
        src="https://th.bing.com/th/id/OIP.bDKI66TJNhfPl-sYzU45iQAAAA?rs=1&pid=ImgDetMain"
      />
    </button>

    {/* Search Suggestion Dropdown */}
{showSuggestions && <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-1 z-10">
 {suggestions.map((search)=> <li key={search} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">{search}</li> )} 
</ul>}
  </div>
</div>

      
      <div className="col-span-2 flex justify-center items-center">
        <img
          className="h-8"
          alt="user-icon"
          src="https://th.bing.com/th/id/R.d334e18fc39188f95d0f97e93757fce6?rik=YyGh0I3ai2O7Cw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_337531.png&ehk=vOUxpk7WqUPnWI%2ft0dfXzjVhVSJ7AwHxX3v5oPKEsZs%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
    </div>
  );
};

export default Header;
