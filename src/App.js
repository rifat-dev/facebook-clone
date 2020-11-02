import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import LogIn from './components/LogIn/LogIn';
import Sidebar from './components/sideBar/Sidebar';
import Widgets from './components/Weidgets/Widgets'
import { useStateValue } from './components/ContextApi/StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="App">
      {!user ? (
        <LogIn />
      ) : (
          <>
            <Header />
            <div className="app-body">
              <Sidebar />
              <Feed />
              <Widgets/>
            </div>
          </>
        )}
    </div>
  );
}

export default App;
