import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import Single from './views/Single.jsx';
import Upload from './views/Upload.jsx';

const App = () => {
  return (
    <Router basename="/~quangth/week4-react-hooks/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/single" element={<Single />} />
          <Route path="/upload" element={<Upload />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
