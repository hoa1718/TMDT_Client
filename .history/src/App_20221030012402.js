import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/Home" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
