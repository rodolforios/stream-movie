import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import Search from './pages/Search'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />

        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>

            }
          />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>

            }
          />

          <Route
            path='/search'
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>

            }
          />

        </Routes>



      </AuthContextProvider>
    </>
  );
}

export default App;
