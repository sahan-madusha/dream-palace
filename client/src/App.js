import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import {
  HOMEPAGEURL,
  ABOUTUS,
  CONTACTUS,
  PROPERTIES,
  SINGLEVIEW,
} from "./constant/AppConstant.js";
import { NavigationBar, Footer } from "./components";
import { HomePage, AboutUsPage, ContactUsPage, PropertiesPage ,SingleViewPage } from "./pages";
import "react-widgets/styles.css";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          {/* Web Page Navigation */}
          <Route
            path="/*"
            element={
              <>
                <NavigationBar />
                <Routes>
                  <Route path={HOMEPAGEURL} element={<HomePage />} />
                  <Route path={ABOUTUS} element={<AboutUsPage />} />
                  <Route path={CONTACTUS} element={<ContactUsPage />} />
                  <Route path={PROPERTIES} element={<PropertiesPage />} />
                  <Route path={`${SINGLEVIEW}/:id`} element={<SingleViewPage />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
