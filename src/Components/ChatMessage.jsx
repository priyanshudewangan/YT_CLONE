import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='p-3 flex gap-4 items-center'>
        <img
          className="h-7 w-7 rounded-full cursor-pointer"
          src="https://freepngimg.com/download/youtube/62644-profile-account-google-icons-computer-user-iconfinder.png"
          alt="profile"
        />
        <div className='flex flex-row gap-4'>
        <span className='font-bold'>{name} : </span>
        <span>{message}</span>

        </div>
    </div>
  )
}

export default ChatMessage