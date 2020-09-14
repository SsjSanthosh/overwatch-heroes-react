import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import HeroShowcase from "./Components/heroShowcase";
import HeroSelection from "./Components/heroSelection";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeroShowcase />
        <HeroSelection />
      </div>
    </Provider>
  );
}

export default App;
