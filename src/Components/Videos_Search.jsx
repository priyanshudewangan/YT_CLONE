import React from 'react'
import { useNavigate } from 'react-router-dom';

const Videos_Search = ({ ids }) => {
    const navigate = useNavigate();

    return (
        <div className="p-4 grid grid-cols-1 w-full gap-4 max-w-[1200px] mx-auto">
            {ids.map((id) => (
                <div
                    key={id.id}
                    onClick={() => navigate(`/watch?v=${id.id}`)}
                    className="bg-white p-4 flex  gap-4 w-full rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                    <img
                        className="w-[360px] h-[202px] object-cover rounded-xl "
                        src={id.snippet.thumbnails.medium.url}
                        alt={id.snippet.title}
                    />

                    <div className='flex flex-col'>
                        <p className="font-semibold mt-3 line-clamp-1">
                            {id.snippet.title}
                        </p>

                        <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                            {id.snippet.channelTitle}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Videos_Search