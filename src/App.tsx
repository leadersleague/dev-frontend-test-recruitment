import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./config/routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component name={route.name} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
