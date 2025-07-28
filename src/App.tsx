import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DashboardPage from "./pages/DashboardPage";
import GradesPage from "./pages/GradesPage";
import './styles/globals.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/grades" element={<GradesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
