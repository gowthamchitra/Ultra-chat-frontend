
import './App.css';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import Routes from './Routes';

function App() {
  axios.defaults.baseURL="http://localhost:https://ultra-chat-app.onrender.com";
  axios.defaults.withCredentials=true;
  return (
    <UserContextProvider>
    <Routes />
    </UserContextProvider>
  );
}

export default App;
