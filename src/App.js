import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import PackageCard from "./pageJS/PackageCard";
import PackageInfo from "./pageJS/PackageInfo";
import VisaPkg from "./pageJS/VisaPkg";
import EachVisaInfo from "./pageJS/EachVisaInfo";
import MainBlog from './pageJS/MainBlog';

import "aos/dist/aos.css";
import AOS from "aos";
AOS.init({
  duration: 1500,
});

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainBlog} />
        <Route path="/packageInfo" exact component={PackageInfo} />
        <Route path="/eachVisaInfo" exact component={EachVisaInfo} />
      </Switch>
    </>
  );
}

export default App;
