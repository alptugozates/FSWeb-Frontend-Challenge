import { useTranslation } from "react-i18next";
import i18n from "../i18n/il18n";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { DataContext } from "../context/DataProvider";

const Skills = () => {
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const { apiSkillsData } = useContext(DataContext);
  console.log("darkmode:", isDarkMode);

  return (
    <div
      className={`skills flex ${
        isDarkMode ? "bg-[#252128]" : "bg-white"
      }  sm:w-full max-sm:w-full sm:mx-auto  max-sm:mx-auto  lg:flex-row sm:flex-col sm:items-center lg:items-start  sm:py-10 max-sm:py-8 max-sm:flex-col max-sm:items-center`}
    >
      <div className="baslik font-inter font-bold w-1/4 ml-60 lg:text-5xl sm:text-4xl sm:w-1/2 sm:mb-5 text-5xl max-sm:m-0 max-sm:text-2xl max-sm:mb-3">
        <h2
          className={`ml-32 mt-10 lg:w-9/12 lg:mx-auto lg:mb-8 sm:mx-auto  sm:mb-6  max-sm:m-auto max-sm:mb-5   ${
            isDarkMode ? "text-custom-green" : "text-custom-blue"
          }`}
        >
          {t("skills")}
        </h2>
      </div>
      <div className="skillsBoks h-full p-0 m-0  flex flex-grow basis-200 flex-wrap lg:w-3/4 sm:w-3/4 max-sm:w-3/4 lg:mr-32 justify-between ">
        {apiSkillsData?.map((item) => (
          <div className="flex  items-center lg:w-[40%] max-w-[75%] sm:w-[40%]  max-sm:w-[35%]">
            <img className="max-w-[60%] mr-50" src={item.url} alt="" />
            <span
              className={`max-sm:text-xs font-inter uppercase text-2xl ${
                isDarkMode ? "text-[#FFF]" : "text-slate-400"
              }`}
            >
              {item.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
