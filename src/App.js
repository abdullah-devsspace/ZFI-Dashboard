import './App.css';
import 'jquery/dist/jquery.min.js'
import $ from 'jquery';
import jQuery from 'jquery';

import './assets/vendor/chart.js/Chart.min.js'
import './assets/css/sb-admin-2.css'
import './assets/css/sb-admin-2.min.css'
import './assets/vendor/bootstrap/js/bootstrap.bundle.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './Layout';
import Content from './components/Content';
import Logout from './pages/Logout';
import UserList from './components/UserList';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const authenticate = useAuth0();

  // console.log(authenticate);
  
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route element={<Layout />}>
              <Route index path='/' element={<Content />} />
              <Route exact path='/user' element={<UserList />} />
           </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
