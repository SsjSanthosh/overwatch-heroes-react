import React from "react";
import "./App.scss";
import HeroShowcase from "./Components/heroShowcase";
import HeroSelection from "./Components/heroSelection";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        AWS black magic
        <HeroShowcase />
        <HeroSelection />
      </div>
    </Provider>
  );
}

export default App;
