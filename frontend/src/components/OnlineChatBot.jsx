import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OnlineChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Set initial message from AI when component mounts
    const defaultMessage = 'How can I assist you today?';
    setMessages([{ sender: 'ai', text: defaultMessage }]);
  }, []);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages(prevMessages => [...prevMessages, { sender: 'user', text: input }]);
    setInput('');

    try {
      // Fetch AI response
      // const response = await axios.post('http://localhost:3000/chat', { message: input });
      const response = await axios.post('https://codehub-6wrs.onrender.com/chat', { message: input });
      setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: response.data.response }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: 'Error: Could Not Retrieve Response...' }]);
    }
  };

  return (
    <div className="app" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'Poppins',
      backgroundImage: 'white',
      padding: '20px'
    }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2em', marginBottom: '20px' }}>
        Chat With <span style={{ color: '#FFA500' }}>AI</span>
      </h1>
      <div className="chat-container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '50px'
      }}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}-box`} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '10px',
            overflowY: 'auto',
            backgroundColor: '#000000',
            color: '#FFFFFF'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{message.sender === 'user' ? 'User :' : 'AI :'}</div>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-container" style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
        paddingBottom: '20px'
      }}>
        <input
          type="text"
          placeholder="Type Your Message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #000000',
            borderRadius: '5px',
            marginRight: '10px'
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
            
          }}
          
        // onMouseDown={(e) => e.currentTarget.style.backgroundColor = '#ADD8E6'}
        // onMouseUp={(e) => e.currentTarget.style.backgroundColor = '#0000FF'}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default OnlineChatBot;
