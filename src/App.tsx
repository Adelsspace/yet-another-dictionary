import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLaoyut";
import "./scss/App.scss";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
