import "./App.css"; // Asegúrate de tener estilos para estos componentes.
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomeScreen = lazy(() => import("./pages/HomeScreen"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Suspense>
  );
}

export default App;
