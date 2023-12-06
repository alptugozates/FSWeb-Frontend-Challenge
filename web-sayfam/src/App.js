import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profil from "./components/Profil";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    const language = localStorage.getItem("language") || "en";
    if (language === "tr") {
      toast.info("Sayfama Hoşgeldiniz!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.info("Welcome to my page!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <Skills />
      <Profil />
      <Project />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
