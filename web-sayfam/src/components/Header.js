import "../App.css";
import "../index.css";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/il18n";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { DataContext } from "../context/DataProvider";
export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLanguage);
  };
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const { apiData } = useContext(DataContext);
  const render = apiData.map((item) => {
    return (
      <div
        key={item.id}
        className={`hero ${
          isDarkMode
            ? "bg-gradient-to-r from-navy-blue from-65% to-black-gray to-35%"
            : "bg-gradient-to-r from-custom-blue from-65% to-custom-green to-35%"
        }  h-auto`}
      >
        <div className="flex justify-center flex-row-reverse sm:w-auto sm:pl-[33rem] gap-10 pt-4">
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onClick={toggleDarkMode}
              value=""
              class="sr-only peer"
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span
              class={`ms-3 ${
                isDarkMode ? "text-[#D9D9D9]" : " text-custom-blue "
              } font-inter text-base font-bold`}
            >
              {" "}
              {isDarkMode ? "LIGHT MODE" : "DARK MODE"}{" "}
            </span>
          </label>
          <a
            className={`font-inter font-bold text-base ${
              isDarkMode ? "text-[#BAB2E7]" : "text-custom-green"
            } `}
            onClick={changeLanguage}
          >
            {i18n.language === "en" ? "TÜRKÇE'YE GEÇ" : "INGILIZCE'YE GEÇ"}
          </a>
        </div>
        <div className="">
          <h3 className="text-baslik font-bold font-inter text-3xl sm:ml-[16rem] pt-12 text-custom-green sm:mx-auto   ">
            {item.baslik}
          </h3>
        </div>
        <div className="hero-content flex justify-center items-center flex-col lg:flex-row max-w-full lg:ml-44">
          <div className="hero-left flex flex-col max-w-xl gap-10 lg:ml-16">
            <h2 className="text1 font-inter text-custom-green max-w-[90%] text-4xl lg:text-5xl font-bold">
              {t("aciklama1")}
            </h2>
            <p className="text2 font-inter text-lg lg:text-2xl text-white ">
              {t("aciklama2")}
            </p>
            <div className="buttons flex flex-row gap-4">
              <a
                href="https://github.com/alptugozates"
                className={`linkedin-button flex items-center ${
                  isDarkMode
                    ? "bg-[#252128] text-[#FFF] border-2 border-white hover:bg-[#47434b]  "
                    : "bg-white  hover:bg-slate-300 duration-300 text-indigo-800"
                }  rounded-lg px-5 py-3 text-lg font-inter font-medium `}
              >
                <img
                  src={item.github}
                  alt=""
                  className="mr-2 max-sm:px-auto max-sm:mx-auto sm:mx-auto sm:px-auto sm:w-6/12"
                  style={{ filter: isDarkMode ? "brightness(100)" : "" }}
                />
                Github
              </a>
              <a
                href=""
                className={`linkedin-button flex items-center ${
                  isDarkMode
                    ? "bg-[#252128] text-[#FFF] border-2 border-white hover:bg-[#47434b]  "
                    : "bg-white text-indigo-800 hover:bg-slate-300 duration-300"
                } rounded-lg px-5 py-3 text-lg font-inter font-medium `}
              >
                <img
                  src={item.linkedin}
                  alt=""
                  className="mr-2 max-sm:px-auto max-sm:mx-auto sm:mx-auto sm:px-auto sm:w-6/12"
                  style={{ filter: isDarkMode ? "brightness(100)" : "" }}
                />
                Linkedin
              </a>
            </div>
          </div>
          <div className="hero-img w-full lg:w-7/12 xl:w-11/12 lg:ml-10 mt-10">
            <img src={item.heroRigth} alt="" className="w-full lg:w-auto" />
          </div>
        </div>
      </div>
    );
  });

  return <div>{render}</div>;
}
