import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "./App";
import Home from "./scenes/Home/Home";
import Login from "./scenes/Auth/Login.jsx";
import UserandGroups from "./scenes/UsersandGroups/UserandGroups.jsx";
import CreateUser from "./scenes/UsersandGroups/CreateUser.jsx";
import GroupEdit from "./scenes/UsersandGroups/GroupEdit/GroupEdit.jsx";
import MasterCategoryHome from "./scenes/MasterCategoryHome/MasterCategoryHome.jsx";
import MasterTableHome from "./scenes/MasterTable/MasterTableHome.jsx";
import MakerUpload from "./scenes/MakerUpload/MakerUpload.jsx";
import CheckerVerification from "./scenes/CheckerVerification/CheckerVerification.jsx";
import Application from "./scenes/Application/Application.jsx";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Default redirect to /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userandgroups" element={<UserandGroups />} />
            <Route path="/usergroupedit" element={<GroupEdit />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/mastertablehome" element={<MasterTableHome />} />
            <Route
              path="/checkerverification"
              element={<CheckerVerification />}
            />
            <Route path="/makerupload" element={<MakerUpload />} />
            <Route
              path="/mastercategoryhome"
              element={<MasterCategoryHome />}
            />
            <Route path="/application" element={<Application />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
