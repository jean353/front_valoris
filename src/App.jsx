import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Home from './pages/public/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Pricing from './pages/public/Pricing';
import Dashboard from './pages/dashboard/Dashboard';
import AddPatent from './pages/dashboard/AddPatent';
import Analysis from './pages/dashboard/Analysis';
import Discussion from './pages/dashboard/Discussion';
import MyPatents from './pages/dashboard/MyPatents';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes without layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Routes with layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* Dashboard routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/add-patent" element={<AddPatent />} />
            <Route path="/dashboard/analysis" element={<Analysis />} />
            <Route path="/dashboard/discussion" element={<Discussion />} />
            <Route path="/dashboard/my-patents" element={<MyPatents />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
