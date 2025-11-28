import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#f3f4f6] text-gray-800 font-sans overflow-hidden selection:bg-[rgb(157,71,10)] selection:text-white">
        <Sidebar />
        <main className="flex-1 overflow-hidden relative flex flex-col">
          {/* Top decorative loading line (static for design) */}
          <div className="h-1 bg-gray-200 w-full">
            <div className="h-full bg-[rgb(157,71,10)] w-0 animate-[load_1s_ease-out_forwards]"></div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/screen-guard" element={<ProductManager category="Screen Guard" />} />
              <Route path="/phone-case" element={<ProductManager category="Phone Case" />} />
              <Route path="/combo" element={<ProductManager category="Combo/Display" />} />
              <Route path="/cc-board" element={<ProductManager category="CC Board" />} />
              <Route path="/battery" element={<ProductManager category="Battery" />} />
              <Route path="/center-panel" element={<ProductManager category="Center Panel" />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;