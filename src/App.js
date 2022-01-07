import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import PublicRouter from "./routes";

function App() {
  return (
    <Router>
      <PublicRouter />
    </Router>
  );
}

export default App;
