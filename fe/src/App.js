import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/Login.js";
import { Provider } from "react-redux";
import ChatbotComponent from "./pages/chatbot/chatbot.js";
import RegisterPage from "./pages/Register/Register.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/" element={<ChatbotComponent />} />
      </Routes>
    </div>
  );
}
export default App;
