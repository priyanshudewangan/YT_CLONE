import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GoogleAPIkey } from "../Utils/Constant";
import share from "../assets/share.png";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../Utils/sideBarSlice";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams(); //its related to URL after "?".
    const [videoDetails, setVideoDetails] = useState(null);
    const videoId = searchParams.get("v");

    useEffect(() => {
        if (!videoId) return;

        const fetchVideoDetails = async () => {
            const data = await fetch(
                `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${GoogleAPIkey}`
            );
            const json = await data.json();
            setVideoDetails(json.items[0]);
            // console.log(json.items[0]);

        };

        fetchVideoDetails();
    }, [videoId]);

    if (!videoDetails) return null;


    dispatch(closeSidebar());
    return (
        <div className="w-full px-4">
            <div className="flex gap-3">
                <iframe
                    className="w-6/7 min-h-[70vh] rounded-xl"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube player"
                    allowFullScreen
                />
                <div>
                    <div className="w-full border-black border-2 rounded-lg"><LiveChat /></div>
                    <div className="w-full gap-4 bg-gray-200 rounded-lg mt-2">
                        <input
                            className="border-black p-2  w-2/3 focus:outline-none"
                            placeholder="enter your message"
                        />
                        <button className=" w-1/3 bg-red-200 rounded-lg">Send</button>
                    </div>
                </div>

            </div>
            {/* video title, like and dislike etc */}
            <div className="mt-4">
                <p className="text-lg font-semibold">
                    {videoDetails.snippet.title}
                </p>
                <div className="flex justify-between">
                    <p className="font-bold">{videoDetails.snippet.channelTitle}</p>

                    <div className="container-for-share-and-likes gap-4 flex">

                        <div className="likes-dislikes flex justify-between items-center w-20 p-1 bg-gray-200 rounded-2xl">
                            <button className="likes ">👍🏻</button>
                            <p>|</p>
                            <button className="likes">👎🏻</button>
                        </div>
                        <div className="share flex items-center bg-gray-200 rounded-2xl p-1">
                            <img
                                className="w-7"
                                src={share} />
                            <p className="text-[12px]">Share</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Description */}
            <div className="m-1 mt-5 bg-gray-200 rounded-lg p-2 ">
                <p>{videoDetails.snippet.localized.description}</p>
            </div>

            {/* Comments */}
            <CommentSection />

        </div>
    );
};

export default WatchPage;