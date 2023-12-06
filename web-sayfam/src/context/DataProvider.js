import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import headerData from "../data/headerData";
import { aboutMe, hakkımda } from "../data/profilData";
import { p1, p2 } from "../data/projectData";
import skilsData from "../data/skillsData";
import { instance } from "../api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [apiProfilData, setApiProfilData] = useState([]);
  const [apiProject, setApiProject] = useState([]);
  const [apiSkillsData, setApiSkillsData] = useState([]);

  useEffect(() => {
    instance
      .post("/", headerData)
      .then((res) => {
        setApiData(res.data);
        console.log("api isteği başarılı");
      })
      .catch((err) => console.log("Header api post başarısız oldu", err));
  }, []);

  const postData = {
    hakkımda: hakkımda,
    aboutMe: aboutMe,
  };
  useEffect(() => {
    instance
      .post("https://reqres.in/api/workintech", postData)
      .then((res) => {
        setApiProfilData(res.data);
        console.log("api isteği başarılı");
      })
      .catch((err) => console.log("Profil api post başarısız oldu", err));
  }, []);

  const postProject = {
    p1: p1,
    p2: p2,
  };

  useEffect(() => {
    instance
      .post("https://reqres.in/api/workintech", postProject)
      .then((res) => {
        setApiProject(res.data);
        console.log("api isteği başarılı");
      })
      .catch((err) => console.log("Project api post başarısız oldu", err));
  }, []);

  useEffect(() => {
    instance
      .post("https://reqres.in/api/workintech", skilsData)
      .then((res) => {
        setApiSkillsData(res.data);
        console.log("api isteği başarılı");
      })
      .catch((err) => console.log("api post başarısız oldu", err));
  }, []);

  return (
    <DataContext.Provider
      value={{ apiData, apiProfilData, apiProject, apiSkillsData }}
    >
      {children}
    </DataContext.Provider>
  );
};
