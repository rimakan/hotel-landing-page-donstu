import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './scss/index.scss';
import Home from './components/pages/Home/Home';
import Facilities from './components/pages/Facilities/Facilities';
import Rooms from './components/pages/Rooms/Rooms';
import Contact from './components/pages/Contact/Contact';
import Login from './components/pages/Login/Login';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route
            path="/facilities"
            element={
              <ProtectedRoute>
                <Facilities />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rooms"
            element={
              <ProtectedRoute>
                <Rooms />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
