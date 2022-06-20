import React from 'react';
import Home from '../src/pages/Home';
import Details from '../src/pages/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Details />} path="/details" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
