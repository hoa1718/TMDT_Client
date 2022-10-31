import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/M/*" element={<Admin></Admin>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
