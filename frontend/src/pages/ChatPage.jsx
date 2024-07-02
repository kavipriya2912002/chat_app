import { useEffect, useState } from "react";

import  axios  from "axios";
import { BASE } from "../const";
function ChatPage() {
const [chats,setChats]= useState([]);
  const fetchChats = async () => {
    const response = await axios.get(`${BASE}/api/chat`);
    console.log(response.data);
    setChats(response.data);

  };

  useEffect(() => {
    fetchChats();
  },[]);
  return (
    <div>
      {chats.map((chat, i) => (
        <div key={i}>{chat.chatName}</div>
      ))}
    </div>
  );
}

export default ChatPage;
