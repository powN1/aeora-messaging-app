import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/aeora">
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
