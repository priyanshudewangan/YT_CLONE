import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/ChatSlice';

const names = [
  "Priyanshu",
  "Riya",
  "Rahul",
  "Neha",
  "Priya",
  "Aman",
  "Ankit",
  "Sakshi",
  "Kunal",
  "Pooja",
  "Rohit",
  "Sneha",
  "Aditya",
  "Simran",
  "Vikas",
  "Shubham",
  "Ayush",
  "Nikhil",
  "Kriti",
  "Arjun",
  "Sahil",
  "Ishita",
  "Yash",
  "Tanvi",
  "Manish",
];

const messages = [
  "Hello 👋",
  "Nice video!",
  "LOL 😂",
  "Anyone watching live?",
  "🔥🔥🔥",
  "This is crazy!",
  "Hi from India 🇮🇳",
  "First comment 😎",
  "Bro this is awesome",
  "Who else is watching at night?",
  "Audio is clear 👍",
  "Video quality 🔥",
  "Big fan ❤️",
  "Replay gang here 👇",
  "This deserves more views",
  "Haha true 😂",
  "So relatable",
  "I agree 💯",
  "Can you explain again?",
  "Love this content ❤️",
  "Subscribed ✅",
  "Like button smash karo 👍",
  "Chat is fast 😅",
  "Lag ho raha hai kya?",
  "Op 🔥",
  "Legend watching live 👑",
];


const LiveChat = () => {

    // const [chats, setChats] = useState([]);
    const dispatch = useDispatch();
    const selector = useSelector((store) => store.chat.message)

    useEffect(() => {

        //API polling

        const interval = setInterval(() => {
            console.log("api polling");

            const number1 = Math.floor(Math.random() * names.length);
            const number2 = Math.floor(Math.random() * messages.length);


            dispatch(addMessage({
                name: names[number1],
                message: messages[number2],
            }))

            // const randomChat = {
            //     name: names[Math.floor(Math.random() * names.length)],
            //     message: messages[Math.floor(Math.random() * messages.length)]

            // };
            // setChats((prev) => [...prev, randomChat])
        }, 1500)

        return () => clearInterval(interval);

    }, [])


    return (
        // This overflow-x-hidden prevents width growth.
        <div className='overflow-y-scroll w-[400px] h-[70vh]'>
            {selector.map((c, index) => <ChatMessage key={index} name={c.name} message={c.message} />)}

        </div>
    )
}

export default LiveChat