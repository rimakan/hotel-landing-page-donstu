import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute';
import Contact from './components/pages/Contact/Contact';
import Facilities from './components/pages/Facilities/Facilities';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import Rooms from './components/pages/Rooms/Rooms';
import './scss/index.scss';
import { store } from './store/store';

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
