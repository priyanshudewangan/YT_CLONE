import React, { useState } from 'react'
import home from "../assets/home.png";
import subscriprion from "../assets/subscriprion.png";
import entertainment from "../assets/entertainment.png"
import game_icon from "../assets/game_icon.png"
import shorts from "../assets/shorts.png"
import music from "../assets/music.png"
import news from "../assets/news.png"
import { useSelector } from 'react-redux';

const SidebarItem = ({ icon, label, active, onClick }) => {
    
    
  return (
    <button
      type="button"
      onClick={onClick}
      className={active  ? "flex items-center p-2 w-full text-left gap-4 bg-gray-400 rounded-lg" : 
        "flex items-center p-2 w-full text-left gap-4 hover:bg-gray-400 rounded-lg"
    }
    >
      <img className="w-6" src={icon} alt="" />
      <span>{label}</span>
    </button>
  );
};

const Sidebar = () => {
    const [activeState, setActiveState] = useState("Home");
    const selector = useSelector((store) => store.sidebar.isOpen);
    const handleClick = (item) => {
        setActiveState(item);
    }

    if (!selector) return null;
    
  return (
    <div  className='px-5 pt-6 w-48 h-screen bg-gray-000 select-none '>
        <SidebarItem icon={home} label="Home" active={activeState === "Home"} onClick={ () => handleClick("Home")}/>
        <SidebarItem icon={shorts} label="Shorts" active={activeState === "Shorts"} onClick={ () => handleClick("Shorts")}/>
        <SidebarItem icon={game_icon} label="Gaming" active={activeState === "Gaming"} onClick={ () => handleClick("Gaming")} />
        <SidebarItem icon={music} label="Music" active={activeState === "Music"} onClick={ () => handleClick("Music")}/>
        <SidebarItem icon={news} label="News" active={activeState==="news"} onClick={() => handleClick("news")}/>
        <SidebarItem icon={entertainment} label="Entertainment" active={activeState==="entertainment"} onClick={() => handleClick("entertainment")}/>

        <div className='w-full outline-1'></div>

        <div className='p-2 pt-4 flex hover:bg-gray-400 pb-4'>
            <img 
                className='w-6'
                src={subscriprion}/>
            <h2 className='font-bold'>Subscription</h2>
        </div>

        {/* Break */}
        <div className='w-full outline-1'></div>
        
        {/* You */}
        <div className='pt-4'>
            <p className='font-bold text-lg'>You</p>
            <SidebarItem
              icon="https://cdn-icons-png.freepik.com/256/2089/2089679.png?semt=ais_white_label"
              label="History"
            />
            <SidebarItem
              icon="https://cdn-icons-png.freepik.com/256/2089/2089679.png?semt=ais_white_label"
              label="Playlist"
            />
            <SidebarItem
              icon="https://cdn-icons-png.freepik.com/256/2089/2089679.png?semt=ais_white_label"
              label="Watch Later"
            />
            <SidebarItem
              icon="https://cdn-icons-png.freepik.com/256/2089/2089679.png?semt=ais_white_label"
              label="Liked Videos"
            />

            {/* Break */}
            <div className='w-full outline-1'></div>
        </div>
    </div>
  )
}

export default Sidebar