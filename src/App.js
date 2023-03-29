import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';

import Categories from './pages/Categories/Categories';

function App() {
  return (
    <div className="container p-5">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
