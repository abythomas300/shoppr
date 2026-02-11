import { useEffect, useState} from 'react';
import ChatBubble from '../components/layout/ChatBubble'
import socket from '../config/socket'

function ChatbotPage()  {

  const [message, setMessage] = useState(''); // for current message
  const [messages, setMessages] = useState(['Hi, how can I help you today?']); // for all previous message

  useEffect(()=>{
    // Listening for incoming messages from server
    socket.on('bot_reply', (serverMessage)=>{
      setMessages((prevMessages)=>[...prevMessages, serverMessage])
    })

    return ()=>{
      socket.off('bot_reply')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage('');

      // Send message to server
      socket.emit('user_message', message)
    }
  };

  return (
    <div className="flex flex-col h-screen">

      <header className="flex bg-primary justify-center text-white py-4">
        <h1 className="text-3xl text-primary-content ">Shoppr Chatbot Test</h1>
      </header>

      <ul id="messages" className="flex-1 overflow-auto p-4">
      {
        messages.map((msg, index)=>{
          return(
            <ChatBubble message={msg} indexNo={index} ></ChatBubble>
          )
        })
      }
      </ul>

      <form
        id="form"
        className="fixed bottom-0 left-0 right-0 flex items-center bg-primary bg-opacity-20 p-2 backdrop-blur-md"
        onSubmit={handleSubmit}
      >
        <input
          id="input"
          type="text"
          name="userMessage"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="grow p-2 mr-2 rounded-full bg-white focus:outline-none"
          placeholder="Type your message here"
        />
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatbotPage;
