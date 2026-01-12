import React from 'react'
import { useNavigate } from 'react-router-dom';

const Videos = ({ ids }) => {
    const navigate = useNavigate();
    const formatViews = (views) => {
        const count = Number(views);

        if (count >= 10000000) return (count / 10000000).toFixed(1).replace(/\.0$/, "") + "Cr";
        if (count >= 100000) return (count / 100000).toFixed(1).replace(/\.0$/, "") + "L";
        if (count >= 1000) return (count / 1000).toFixed(1).replace(/\.0$/, "") + "K";

        return count.toString();
    };



    return (
        <div className="p-4 grid grid-cols-3 gap-4">
            {ids.map((id) => (
                <div
                    key={id.id}
                    onClick={() => navigate(`/watch?v=${id.id}`)}
                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                    <img
                        className="w-full rounded-xl object-cover"
                        src={id.snippet.thumbnails.medium.url}
                        alt={id.snippet.title}
                    />

                    <p className="font-semibold mt-3 line-clamp-2">
                        {id.snippet.title}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                        {id.snippet.channelTitle}
                    </p>

                    <p className="text-sm text-gray-600">
                        {id.statistics ? `${formatViews(id.statistics.viewCount)}` : "-"} views
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Videos