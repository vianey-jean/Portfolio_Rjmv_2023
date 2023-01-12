import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Dom injector and creation of router
 * @return routes
 */


function RoutePath() {
  return (
    <BrowserRouter>
      <section className="elementsToDisplay">
        <Routes>
         <Route path='/'></Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}
export default RoutePath;
