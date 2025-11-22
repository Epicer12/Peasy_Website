import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageV2 from './v2/AppV2';
import PageV3 from './v3/Page';
import PageV4 from './v4/Page';
import TestPageV4 from './v4/animations/TestPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageV3 />} />
        <Route path="/v2" element={<PageV2 />} />
        <Route path="/v3" element={<PageV3 />} />
        <Route path="/v4" element={<PageV4 />} />
        <Route path="/v4/test-animation" element={<TestPageV4 />} />
      </Routes>
    </Router>
  );
}

export default App;
