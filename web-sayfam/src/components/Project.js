import { useTranslation } from "react-i18next";
import i18n from "../i18n/il18n";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { DataContext } from "../context/DataProvider";

const Project = () => {
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const { apiProject } = useContext(DataContext);

  return (
    <div
      className={`project  max-sm:w-full mx-auto pb-8 ${
        isDarkMode ? "bg-black-gray" : "bg-custom-green"
      } lg:py-20 max-sm:py-10 sm:py-14`}
    >
      <h1
        className={`baslik  font-inter sm:text-center sm:text-5xl mx-auto mb-7 lg:text-5xl max-sm:text-3xl max-sm:text-center font-semibold ${
          isDarkMode ? "text-custom-green" : "text-custom-blue"
        } `}
      >
        {t("projects")}
      </h1>
      <div className="box-1 mb-9">
        {apiProject.p1?.map((item) => (
          <div
            className={`p1 flex lg:w-9/12 ${
              isDarkMode ? "bg-[#252128]" : "bg-white"
            } max-sm:mx-4 max-lg:flex-col max-lg:m-8  lg:mx-auto rounded-lg max-sm:flex-col sm:w-full shadow-2xl`}
          >
            <div className="image lg:w-9/12 max-lg:w-full  max-sm:w-full max-sm:mb-3">
              <img
                className=" lg:w-[360px] lg:h-[360px] max-lg:w-[756px] max-lg:h-[472px] rounded-lg object-cover h-auto"
                src={item.image1}
                alt=""
              />
            </div>
            <div className="p-text w-full  max-lg:p-8  m-auto">
              <div className="">
                <h2
                  className={`p1-baslik font-inter lg:pb-6 max-sm:pb-3 sm:pb-4 sm:text-2xl lg:text-3xl max-sm:text-2xl font-semibold  max-lg:pt-4 ${
                    isDarkMode ? "text-[#C1BAED]" : "text-custom-blue"
                  } `}
                >
                  Workintech
                </h2>
                <p
                  className={`p1-aciklama lg:pb-6 lg:text-xl max-lg:pb-4 pr-[5vh] ${
                    isDarkMode ? "text-[#FFF]" : "text-slate-500"
                  } `}
                >
                  {t("projeAciklama")}
                </p>
              </div>

              <div className="buttons flex lg:mb-6 max-lg:pb-4 gap-3 flex-wrap">
                <p
                  className={`text-white ${
                    isDarkMode ? "bg-[#8173DA]" : "bg-custom-blue"
                  } px-5 py-2 rounded-3xl`}
                >
                  {" "}
                  {item.react}{" "}
                </p>
                <p
                  className={`text-white ${
                    isDarkMode ? "bg-[#8173DA]" : "bg-custom-blue"
                  } px-5 py-2 rounded-3xl`}
                >
                  {" "}
                  {item.redux}{" "}
                </p>
                <p
                  className={`text-white ${
                    isDarkMode ? "bg-[#8173DA]" : "bg-custom-blue"
                  } px-5 py-2 rounded-3xl`}
                >
                  {" "}
                  {item.vercel}{" "}
                </p>
              </div>
              <div className="link flex gap-3 	text-decoration-line: underline max-sm:pb-3">
                <a
                  href=""
                  target="_blank"
                  className={`font-inter ${
                    isDarkMode ? "text-custom-green" : "text-black"
                  } text-base`}
                >
                  Wiew Site
                </a>
                <a
                  href=""
                  target="_blank"
                  className={`font-inter ${
                    isDarkMode ? "text-custom-green" : "text-black"
                  } text-base`}
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="box-2 mb-9">
        {apiProject.p2?.map((item) => (
          <div
            className={`p1 flex lg:w-9/12  max-sm:mx-4 ${
              isDarkMode ? "bg-[#252128]" : "bg-white"
            } max-lg:flex-col max-lg:m-8  lg:mx-auto  rounded-lg max-sm:flex-col shadow-2xl`}
          >
            <div className="image lg:w-9/12 max-sm:w-full max-sm:mb-3">
              <img
                className="lg:w-[360px] lg:h-[360px] max-lg:w-[756px] max-lg:h-[472px] rounded-lg"
                src={item.image2}
                alt=""
              />
            </div>
            <div className="p-text w-full max-lg:p-8  m-auto">
              <div className="">
                <h2
                  className={`p1-baslik ${
                    isDarkMode ? "text-[#C1BAED]" : "text-custom-blue"
                  } lg:pb-6 max-sm:pb-4 sm:pb-4 sm:text-2xl lg:text-3xl max-sm:text-2xl font-semibold`}
                >
                  Journey
                </h2>
                <p
                  className={`p1-aciklama lg:pb-6 max-lg:pb-4 pr-[5vh] lg:text-xl ${
                    isDarkMode ? "text-[#FFF]" : "text-slate-500"
                  } `}
                >
                  {t("projeAciklama")}
                </p>
              </div>

              <div className="buttons flex lg:mb-6 max-lg:pb-4  gap-3  flex-wrap">
                <p
                  className={`text-white ${
                    isDarkMode ? "bg-[#8173DA]" : "bg-custom-blue"
                  } px-5 py-2 rounded-3xl`}
                >
                  {" "}
                  {item.react}{" "}
                </p>
                <p
                  className={`text-white ${
                    isDarkMode ? "bg-[#8173DA]" : "bg-custom-blue"
                  } px-5 py-2 rounded-3xl`}
                >
                  {" "}
                  {item.redux}{" "}
                </p>
                <p
                  className={`text-white ${
                    isDarkMode ? "bg-[#8173DA]" : "bg-custom-blue"
                  } px-5 py-2 rounded-3xl`}
                >
                  {" "}
                  {item.vercel}{" "}
                </p>
              </div>
              <div className="link flex gap-3 	text-decoration-line: underline max-sm:pb-3 ">
                <a
                  href=""
                  target="_blank"
                  className={`font-inter ${
                    isDarkMode ? "text-custom-green" : "text-black"
                  } text-base`}
                >
                  Wiew Site
                </a>
                <a
                  href=""
                  target="_blank"
                  className={`font-inter ${
                    isDarkMode ? "text-custom-green" : "text-black"
                  } text-base`}
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Project;
