import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/Login.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
export default App;
