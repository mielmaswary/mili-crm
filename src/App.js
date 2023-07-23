import "./App.scss";

import Loader from "./components/assets/Loader";
import useFetch from "./components/assets/useFetch";
import Navbar from "./components/navbar/Navbar";
import SideMenu from "./components/sideMenu/SideMenu";
import React, { useState, useContext, useEffect, Suspense } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import DropDown from "./components/playground/DropDown";
import RadioButtons from "./components/playground/RadioButtons";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PdfGenerator from "./components/playground/PdfGenerator";
import Container from "./components/assets/Container";
import Map from "./components/playground/Map";
import InvitationsMenu from "./components/invitations/InvitationsMenu";
import NewInvitation from "./components/invitations/NewInvitation";
import AllInvitations from "./components/invitations/AllInvitations";
export const AppContext = React.createContext();

function App() {
  const [data, isLoading, error] = useFetch("https://dummyjson.com/products");
  const [navOpen, setNavOpen] = useState(false);
  const [english, setenglish] = useState(false);
  return !isLoading ? (
    <div style={{ height: "100vh" }} className="app">
      <AppContext.Provider
        value={{
          data: data.products,
          isLoading,
          error,
          navOpen,
          setNavOpen,
          english,
          setenglish,
        }}
      >
        <Router>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<Navigate replace to="/about-me" />} />
            <Route path="/invitations" element={<InvitationsMenu />} />
            <Route path="/invitations/new" element={<NewInvitation />} />
            <Route path="/invitations/all" element={<AllInvitations />} />
            <Route path="/about-me" />
            <Route path="/projects" />
          </Routes>
        </Router>
      </AppContext.Provider>
      {/* <Map /> */}
    </div>
  ) : (
    <Loader />
  );
}

export default App;
