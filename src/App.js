import {ChatEngine} from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App =()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(
        <>
        {/* <div height="20vh" >Navbar</div> */}
        <ChatEngine
        height="100vh"
        projectID="fcf3a591-3e98-4e61-a27b-4816a1f6b366
        "
        userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        
        />

        </>
        
        
    );
}

export default App;