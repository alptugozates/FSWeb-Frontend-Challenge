import React, { useContext } from "react";
import "../App.css";
import instagram from "../foto/instagram.svg";
import codepen from "../foto/codepen.svg";
import twitter from "../foto/twitter.svg";
import atSign from "../foto/at-sign.svg";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/il18n";
import { ThemeContext } from "../context/ThemeProvider";

function Footer() {
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={` flex flex-col ${
        isDarkMode ? "bg-[#252128]" : "bg-white"
      } items-center py-20 gap-6 px-8 `}
    >
      <div className="send-message">
        <button
          className={`text-5xl font-semibold font-inter mb-8 ${
            isDarkMode ? "text-[#8F88FF] " : "text-custom-blue"
          } `}
        >
          {t("message")}
        </button>
      </div>
      <h3
        className={` text-2xl lg:w-[480px]  font-inter text-center leading-relaxed tracking-wide ${
          isDarkMode ? "text-[#FFF]" : "text-[#120B39] "
        } `}
      >
        {t("footerMessage")}
      </h3>
      <a
        className={` font-inter text-lg font-semibold tracking-wide underline ${
          isDarkMode ? "text-[#8F88FF] " : "text-custom-blue"
        } `}
        href="mailto:omeralptugozates@gmail.com"
      >
        omeralptugozates@gmail.com
      </a>
      <div className="icons flex gap-x-6 text-4xl">
        <img
          className={`${isDarkMode ? "text-[#8F88FF]" : "text-custom-blue"}`}
          src={twitter}
          alt=""
        />
        <img
          className={`${isDarkMode ? "filter brightness-100" : ""}`}
          src={codepen}
          alt=""
        />
        <img
          className={`${isDarkMode ? "filter brightness-100" : ""}`}
          src={atSign}
          alt=""
        />
        <img
          className={`${isDarkMode ? "filter brightness-100" : ""}`}
          src={instagram}
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
