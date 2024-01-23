import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [predictedMessage, setPredictedMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const handlePredict = async (message) => {
  //   setIsLoading(true);
  //   setError(null);
  //   console.log(message)
  //   try {
  //     const response = await axios.post('http://localhost:5000/predict', { message });
  //     const predictedMessage = response.data.predicted_message;

  //     createChatBotMessage(predictedMessage);
  //     setState((prev) => ({ ...prev, messages: [...prev.messages, predictedMessage] }));
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  async function handlePredict(message) {
    setIsLoading(true);
    setError(null);
    try {
      console.log(message)
      const response = await fetch('http://localhost:5001/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      const data = await response.json();
      const predictedMessage = data.predicted_message;
      const botMessage = createChatBotMessage(predictedMessage);

      console.log("chatboy"+predictedMessage)
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
      // Proceed with predicted message
    } catch (error) {
      console.error('Error fetching prediction:', error);
      // Handle the error (e.g., display an error message to the user)
    }
    finally {
          setIsLoading(false);
        }
  }
  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            createChatBotMessage,
            setState,
            handlePredict,
            predictedMessage,
            isLoading,
            error,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
