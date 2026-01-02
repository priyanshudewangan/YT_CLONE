import React from 'react'
import tom from "../assets/tom.png"

const CommentSection = () => {

    const commentData = [
        {
            name: "priyanshu",
            text: "lorem ipusm",
            replies: [
                {
                    name: "priyanshu",
                    text: "lorem ipusm",
                    replies: [
                        {
                            name: "priyanshu",
                            text: "lorem ipusm",
                            replies: [
                                {
                                    name: "priyanshu",
                                    text: "lorem ipusm",
                                    replies: []
                                }
                            ]
                        }
                    ]
                }
            ],
        },
        {
            name: "priyanshu",
            text: "lorem ipusm",
            replies: [],
        },
        {
            name: "priyanshu",
            text: "lorem ipusm",
            replies: [],
        },
        {
            name: "priyanshu",
            text: "lorem ipusm",
            replies: [],
        }
    ]

    const Comments = ({ data }) => {
        const { name, text } = data;

        return (
            <div>
                <div className='p-4 flex gap-3 items-center'>
                    <img
                        className='w-12 rounded-full'
                        src={tom}
                    />
                    <div className='flex flex-col'>
                        <p className='font-bold'>{name}</p>
                        <p>{text}</p>
                    </div>
                </div>

            </div>
        )
    }

    const CommentList = ({ comment }) => {
        return (
            comment.map((comment, index) => (
                <div>
                    <Comments data={comment} key={index} />
                    <div className='ml-4 pl-4 border-l border-black'>
                        <CommentList comment={comment.replies}/>
                    </div>
                </div>
            ))
        )
    }


    return (
        <div>
            <h1 className='font-bold text-2xl'>Comments:</h1>
            <CommentList comment={commentData} />
        </div>
    )
}

export default CommentSection