// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'ChatBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>,
    // Replaces the default bot avatar
    botAvatar: (props) => <MyAvatar {...props} />,
    // Replaces the default bot chat message container
    botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    // Replaces the default user icon
    userAvatar: (props) => <MyCustomAvatar {...props} />,
    // Replaces the default user chat message
    userChatMessage: (props) => <MyCustomUserChatMessage {...props} />,
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;