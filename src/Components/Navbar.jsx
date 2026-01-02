import React, { useEffect, useState } from "react";
import menu from "../assets/menu.png";
import { useNavigate } from "react-router-dom";
import { GoogleAPIkey, YOUTUBE_SEARCH_API, YOUTUBE_SUGGESTION_API } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../Utils/searchSlice";
import { toggleSidebar } from "../Utils/sideBarSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleYTclick = () => {
    navigate("/");
  }

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);

  const getSearchSuggestions = async () => {
    if (!query.trim()) {
      setSuggestion([]);
      return};
    const data = await fetch(YOUTUBE_SUGGESTION_API + query)
    const json = await data.json();
    setSuggestion(json[1]);
    
    // console.log(json[1]);
    dispatch(cacheResults({
      [query]: json[1] // we are writing in this format because json[1] is an object and it must have a key
    }))
    
  }
  
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    console.log(query);
    const timer = setTimeout(() => {
      if(searchCache[query]) {
        setSuggestion(searchCache[query]);
      } else {
          getSearchSuggestions();
        }

    }, 200);

    return () => {
      clearTimeout(timer)
    }
  }, [query])

  const handleSearchClick = (item) => {
    setQuery(item);
  }


  const handleMenuClick = () => {
    dispatch(toggleSidebar());
  }

  return (
    <nav className="px-5 py-3 grid grid-cols-12 items-center border-b border-gray-300">

      {/* LEFT */}
      <div className="col-span-3 md:col-span-2 flex items-center gap-4">
        <img
          src={menu}
          alt="menu"
          className="w-6 h-6 cursor-pointer"
          onClick={handleMenuClick}
        />

        <img
          onClick={handleYTclick}
          className="h-6 w-auto cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="YouTube"
        />
      </div>

      {/* CENTER */}
      <div className="col-span-6 md:col-span-8 flex justify-center items-center">
        <div className="relative w-full max-w-xl h-auto flex flex-col px-4 bg-gray-200 border border-gray-400 rounded-full">          <div className="flex items-center">

            <input
              className=" w-full h-10 bg-transparent flex items-center outline-none px-9"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <img
              className="h-5 w-5 cursor-pointer"
              src="https://www.freeiconspng.com/uploads/search-icon-png-5.png"
              alt="search"
            />
          </div>
          <div>
              {suggestions.length > 0 && <ul className="absolute top-full bg-gray-200 w-full mt-1 px-4 rounded-lg">
                
              {suggestions.map((items, index) => (
                <li 
                  onClick={() => handleSearchClick(items)} 
                  className="pt-3" key={index}> 🔍  {items} </li>
              ))}
              
            </ul>}
            
          </div>
        </div>

      </div>

      {/* RIGHT */}
      <div className="col-span-3 md:col-span-2 flex items-center gap-2 justify-end">
        <img
          className="h-12 w-12 cursor-pointer"
          src="https://images.template.net/402032/Youtube-Upload-edit-online.png"
          alt="create"
        />
        <img
          className="h-6 w-6 cursor-pointer"
          src="https://www.citypng.com/public/uploads/preview/black-youtube-bell-notification-icon-701751695135877fkcswqnkez.png"
          alt="notifications"
        />
        <img
          className="h-7 w-7 rounded-full cursor-pointer"
          src="https://freepngimg.com/download/youtube/62644-profile-account-google-icons-computer-user-iconfinder.png"
          alt="profile"
        />
      </div>
    </nav>
  );
};

export default Navbar;