import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="14545fe2-47e3-4405-ae28-0753bb8133c8" 
            userName="Test"
            userSecret="1234"
        />
    )
};

export default App;