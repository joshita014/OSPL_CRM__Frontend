// App.jsx
import React from 'react';
import {Link } from 'react-router-dom';
import Home from './components/home/Home';

const App = () => {
  return (
    
    <div>
      <Home />
      <Link to = "/dashboard">
          <button>
            Dashboard
          </button>
        </Link>
        <Link to = "/signup">
          <button>
            Signup
          </button>
        </Link>
        <Link to = "/signin">
          <button>
            Signin
          </button>
        </Link>
      {/* <DashboardRouter /> */}
    </div>
      // // <Routes>
      //   <Route exact path="/" element={<Home />} />
      //   <Route path="/Dashboard*" element={<DashboardRouter />} />
      // // </Routes>
    
  );
};

export default App;
