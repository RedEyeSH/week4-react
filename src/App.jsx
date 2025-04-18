import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import Single from './views/Single.jsx';
import Upload from './views/Upload.jsx';
import Login from './views/Login.jsx';
import Logout from './views/Logout.jsx';

const App = () => {
  return (
    <Router basename="/~quangth/week5-react-forms/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/single" element={<Single />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
