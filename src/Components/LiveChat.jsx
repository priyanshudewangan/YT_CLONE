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
  "Who is here after notification 🔔",
  "Watching from mobile 📱",
  "Full support bro 💪",
  "This part is interesting 👀",
  "Can mods pin this?",
  "Spamming W in chat 😄",
  "Chat going brrr 🔥",
  "Anyone from Delhi?",
  "Late but here 😅",
  "This stream is chill",
  "Background music nice 🎵",
  "Say hi to me 👋",
  "LOL chat too funny 😂",
  "Explain this slowly pls",
  "Just joined!",
  "Respect bro 🙌",
  "Who else loves this topic?",
  "Clarity next level 💯",
  "W content 🔥",
  "Share this stream guys",
  "Volume ok hai 👍",
  "This is underrated",
  "Real time vibes 😎",
  "Notification squad 💥",
  "Bro speaking facts",
  "This chat never stops 😂",
  "Big W",
  "Pure gold content ✨",
  "Next video kab?",
  "This deserves a like 👍",
];


const LiveChat = () => {

    // const [chats, setChats] = useState([]);
    const dispatch = useDispatch();
    const selector = useSelector((store) => store.chat.message)
    const bottomRef = useRef(null);
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
        }, 1500)

        return () => clearInterval(interval);

    }, [])


    return (
        // This overflow-x-hidden prevents width growth.
        <div className='overflow-y-scroll w-[400px] h-[70vh]'>
            {selector.map((c, index) => <ChatMessage key={index} name={c.name} message={c.message} />)}
        
        <div ref={bottomRef}/>
        </div>
    )
}

export default LiveChat