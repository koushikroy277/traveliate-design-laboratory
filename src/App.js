import React from "react";
import "./App.css";
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import PackageCard from "./pageJS/PackageCard";
import PackageInfo from "./pageJS/PackageInfo";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init({
  duration: 1500,
});

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={PackageCard} />
        <Route path="/packageInfo" exact component={PackageInfo} />
      </Switch>
    </>
  );
}

export default App;
