import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PublicRouter from "./routes";

function App() {
  return (
    <Router>
      <PublicRouter />
    </Router>
  );
}

export default App;
