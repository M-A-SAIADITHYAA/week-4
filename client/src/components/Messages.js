import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Messages.css';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Replace 'userId' with actual user ID from authentication
        const response = await axios.get(`http://localhost:5000/api/messages/userId`);
        setMessages(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedUser) return;

    try {
      await axios.post('http://localhost:5000/api/messages', {
        sender: 'userId', // Replace with actual user ID
        receiver: selectedUser,
        content: newMessage
      });
      setNewMessage('');
      // Refresh messages
      const response = await axios.get(`http://localhost:5000/api/messages/userId`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading messages...</div>;
  }

  return (
    <div className="messages-container">
      <h1>Messages</h1>
      <div className="messages-content">
        <div className="messages-list">
          {messages.map((message) => (
            <div key={message._id} className="message-item">
              <div className="message-header">
                <span className="sender">{message.sender.username}</span>
                <span className="timestamp">
                  {new Date(message.createdAt).toLocaleString()}
                </span>
              </div>
              <div className="message-content">{message.content}</div>
            </div>
          ))}
        </div>
        <div className="message-input">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Messages; 