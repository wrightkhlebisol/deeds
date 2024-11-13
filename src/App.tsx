import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {

  return (
    <AuthProvider>
      <Router>
        {/* Render Header */}
        <Header />
        <div className="min-h- bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center p-4">
          <div className="w-full max-w-[1000px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            {/* Routes else */}
            <div className="p-6">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  )
}
