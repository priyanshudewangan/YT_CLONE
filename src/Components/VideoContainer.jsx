import React, { useEffect, useState } from 'react'
import YoutubeVideoAPI from '../Utils/Constant'
import Videos from './Videos';
import ButtonList from './ButtonList';



const VideoContainer = () => {

    const [videoId, setVideoId] = useState([]);


    const getVideos = async () => {
        const data = await fetch(YoutubeVideoAPI);
        const json = await data.json();
        // console.log(json);
        const ids = json.items;
        // console.log(ids);
        setVideoId(ids)


    }

    useEffect(() => {
        const fetchVideos = async () => {
            await getVideos();
        };
        fetchVideos();
    }, [])


    return (
        <div>
            <div className='flex'>
                {/* <Sidebar /> */}
                <div>
                    <ButtonList />
                    <Videos ids={videoId || []} />
                </div>
            </div>
        </div>
    )
}

export default VideoContainer