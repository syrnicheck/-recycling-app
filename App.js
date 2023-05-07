import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import { initDatabase } from "./database/database";

const App = () => {
  useEffect(() => {
    initDatabase();
  }, []);

  return <Navigation />;
};

export default App;
