import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage.jsx";
import ChangePasswordPage from "./pages/ChangePasswordPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post/:pid" element={<PostPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        {/* Thêm các route khác nếu cần */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
