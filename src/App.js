import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Categories from './pages/Categories/Categories';
import ChatPage from './pages/ChatPage/ChatPage';

function App() {
  return (
    <>
      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/chat/:name" element={<ChatPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
