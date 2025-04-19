import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import Single from './views/Single.jsx';
import Upload from './views/Upload.jsx';
import Login from './views/Login.jsx';
import Logout from './views/Logout.jsx';
import { UserProvider } from './contexts/UserContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => {
  return (
    <Router basename="/~quangth/week5-react-context/">
      <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/single" element={<Single />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/logout" element={<Logout />}/>
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
