import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout.jsx";
import App from "./App.jsx";
import Tentang from "./pages/Tentang.jsx";
import Pengaturan from "./pages/Pengaturan.jsx";
import Profil from "./pages/Profil.jsx";
import Tema from "./pages/Tema.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              <Route path="Tentang" element={<Tentang />} />
              <Route path="Pengaturan" element={<Pengaturan />}>
                <Route path="Profil" element={<Profil />} />
                <Route path="Tema" element={<Tema />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
