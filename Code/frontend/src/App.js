//====================================//
// Main component for our Application //
//====================================//

// react-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import PageNotFound from './pages/PageNotFound';
import { useAuthenticationContext } from './hooks/useAuthenticationContext';

function App() {
  const { user } = useAuthenticationContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path = "/" // home page
              element = { user ? <Home /> : <Navigate to="/login" /> } // Home page if there is a user, Login page if there is no user
            />  
            <Route 
              path = "/login" // login page
              element = { !user ? <Login /> : <Navigate to="/" /> } // Home page if there is a user, Login page if there is no user
            />
            <Route 
              path = "/signup" // signup page
              element = { !user ? <Signup /> : <Navigate to="/" /> } // Home page if there is a user, Signup page if there is no user
            />
            <Route 
              path = "/profile" // signup page
              element = { user ? <Profile /> : <Navigate to="/login" /> } // Profile page if there is a user, Login page if there is no user
            />
            <Route
              path = "*" // 404 page
              element = { <PageNotFound /> }
            /> 
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
