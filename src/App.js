import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from "./views/mainpage";
import './App.css'
import Descriptionpage from "./views/components/description";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/moredetailproperty/:id">
            <Route index element={<Descriptionpage />} />
          </Route>
        </Routes>
      </Router>
  );
};

export default App;
