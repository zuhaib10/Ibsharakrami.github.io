import React, { Fragment, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, ThemeProvider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../App.css";
import { createTheme } from "@mui/material/styles";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import darkimage from "../../assets/images/dark.jpg";
import darkimage1 from "../../assets/images/sun.png";
import lightimage from "../../assets/images/light.jpg";
import lightimage1 from "../../assets/images/moon1.png";
import progg from "../../assets/images/progg.png";
import resume from "../../assets/images/IbsharAkramiResume.pdf";
import resume2 from "../../assets/images/resume2.pdf";
// import ProgramSvg from '../../assets/images/ibshar.svg';
import { ReactComponent as ProgramSvg } from "../../assets/images/program.svg";
import Lottie from "lottie-react";
import Ainme from "../../assets/images/animation_llbbjdbm.json";

// Import the font files
import AsgardTrialRegular from "../../assets/fonts/AsgardTrial-Bold.ttf";
import AsgardTrialBold from "../../assets/fonts/AsgardTrial-Bold.ttf";
import Sections from "../Sections";
import Contacts from "../Contact";
import Experience from "../Exp";
import Footers from "../Footer";
import Aos from "aos";
import "aos/dist/aos.css";

// Create a Mui theme with the desired font
const theme = createTheme({
  typography: {
    fontFamily: "AsgardTrial, Arial, sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "AsgardTrial",
            src: `url(${AsgardTrialRegular}) format('ttf')`,
            fontWeight: "normal",
            fontStyle: "normal",
            fontDisplay: "swap",
          },
          {
            fontFamily: "AsgardTrial",
            src: `url(${AsgardTrialBold}) format('ttf')`,
            fontWeight: "bold",
            fontStyle: "normal",
            fontDisplay: "swap",
          },
        ],
      },
    },
  },
});

const Home = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };
  const [showMenu, setShowMenu] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#0D0630");
  const logoImage = backgroundColor === "#0D0630" ? darkimage : lightimage;
  const mennu = backgroundColor === "#0D0630" ? darkimage1 : lightimage1;

  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
  };

  const handleColorChange = () => {
    setBackgroundColor(backgroundColor === "#0D0630" ? "white" : "#0D0630");
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="Home">
      <nav
        className="bg-gray-800 p-4"
        style={{
          backgroundColor,
          position: "fixed",
          width: "100%",
          zIndex: 100,
        }}
        data-aos="fade-down"
      >
        <div className="container mx-auto flex items-center justify-between">
          <img src={logoImage} alt="Logo" className="h-12 w-24" style={{ marginRight: "8px" }} />
          {/* <div className="text-white font-bold text-xl" style={{fontFamily: "AsgardTrial", color: backgroundColor === "#0D0630" ? "white" : "black"}}>Ibshar Codes</div> */}
          <div className="flex space-x-2 items-center">
            <button
              className="bg-white text-black rounded-md md:hidden"
              onClick={handleColorChange}
              style={{
                color: backgroundColor === "#0D0630" ? "#fff" : "#0D0630",
                backgroundColor: backgroundColor === "#0D0630" ? "#0D0630" : "white",
              }}
            >
              {backgroundColor === "#0D0630" ? (
                // Dark mode (sun icon)
                <img src={darkimage1} alt="Logo" className="h-6 w-6" />
              ) : (
                // Light mode (moon icon)
                <img src={lightimage1} alt="Logo" className="h-6 w-6" />
              )}
            </button>
            <button
              className="text-white md:hidden"
              onClick={handleMenuToggle}
              style={{
                color: backgroundColor === "#0D0630" ? "#fff" : "#0D0630",
                backgroundColor: backgroundColor === "#0D0630" ? "#0D0630" : "white",
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <div className="hidden md:flex space-x-4">
              <a
                href="#"
                className="text-white"
                style={{
                  color: backgroundColor === "#0D0630" ? "white" : "black",
                }}
              >
                Home
              </a>
              <a
                href="#about-section"
                className="text-white"
                style={{
                  color: backgroundColor === "#0D0630" ? "white" : "black",
                }}
              >
                About
              </a>
              <a
                href="#services-section"
                className="text-white"
                style={{
                  color: backgroundColor === "#0D0630" ? "white" : "black",
                  // fontFamily: "AsgardTrial"
                }}
              >
                Experience
              </a>
              <a
                href="#contact-section"
                className="text-white"
                style={{
                  color: backgroundColor === "#0D0630" ? "white" : "black",
                  // fontFamily: "AsgardTrial"
                }}
              >
                Contact
              </a>
            </div>
          </div>
          <button
            className="bg-white text-black rounded-md hidden md:block"
            onClick={handleColorChange}
            style={{
              color: backgroundColor === "#0D0630" ? "#fff" : "#0D0630",
              backgroundColor: backgroundColor === "#0D0630" ? "#0D0630" : "white",
            }}
          >
            {backgroundColor === "#0D0630" ? (
              // Dark mode (sun icon)
              <img src={darkimage1} alt="Logo" className="h-6 w-6" />
            ) : (
              // Light mode (moon icon)
              <img src={lightimage1} alt="Logo" className="h-6 w-6" />
            )}
          </button>
        </div>
        {showMenu && (
          <div className=" md:hidden flex flex-col h-full place-items-center justify-center ">
            <div className="px-4 pt-4 pb-4 space-y-2 ">
              <a
                href="#"
                className="block text-white text-center font-medium text-2xl pt-3 pb-3"
                onClick={handleMenuToggle}
                style={{
                  // fontFamily: "AsgardTrial",
                  color: backgroundColor === "#0D0630" ? "white" : "#0D0630",
                  fontWeight: "bold",
                }}
              >
                Home
              </a>
              <a
                href="#about-section"
                className="block text-white text-center font-medium text-2xl pt-3 pb-3"
                onClick={handleMenuToggle}
                style={{
                  // fontFamily: "AsgardTrial",
                  color: backgroundColor === "#0D0630" ? "white" : "#0D0630",
                  fontWeight: "bold",
                }}
              >
                About
              </a>
              <a
                href="#services-section"
                className="block text-white text-center font-medium text-2xl pt-3 pb-3"
                onClick={handleMenuToggle}
                style={{
                  // fontFamily: "AsgardTrial",
                  color: backgroundColor === "#0D0630" ? "white" : "#0D0630",
                  fontWeight: "bold",
                }}
              >
                Services
              </a>
              <a
                href="#contact-section"
                className="block text-white text-center font-medium text-2xl pt-3 pb-3"
                onClick={handleMenuToggle}
                style={{
                  // fontFamily: "AsgardTrial",
                  color: backgroundColor === "#0D0630" ? "white" : "#0D0630",
                  fontWeight: "bold",
                }}
              >
                Contact
              </a>
            </div>
            <div class="flex mt-6 -mx-2  justify-center">
              <a
                href="https://www.instagram.com/ibshar_akrami/"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-6 h-6">
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </a>

              <a href="https://twitter.com/IbsharAhmed" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-6 h-6">
                  <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                </svg>
              </a>

              <a href="https://github.com/ibsharakrami" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                </svg>
              </a>
            </div>
          </div>
        )}
      </nav>

      <div style={{ backgroundColor, paddingTop: 75 }}>
        <div className="px-8 py-4">
          <div className="h-3/4 sm:flex flex-row">
            <div className="sm:w-1/2">
              <div className="pt-4 flex flex-col items-start justify-start  ml-12">
                <a
                  href={resume}
                  download="IbsharResume"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Resume
                </a>
              </div>
              <div className="pt-4 flex flex-col items-start justify-start  ml-12 ">
                <a
                  href={resume2}
                  download="IbsharResume"
                  className="text-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-20"
                >
                  CV
                </a>
              </div>
              <h1
                className="text-black text-right self-end mr-2 text-2xl sm:text-6xl "
                style={{
                  textAlign: "end",
                  fontFamily: "AsgardTrial",
                  color: backgroundColor === "#0D0630" ? "white" : "#0D0630",
                  fontWeight: "bold",
                }}
                // data-aos="zoom-out-right"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                Hi there!
              </h1>
              <h1
                className="text-black text-right self-end mr-2 text-2xl sm:text-6xl "
                style={{
                  textAlign: "end",
                  fontFamily: "AsgardTrial",
                  color: backgroundColor === "#0D0630" ? "white" : "#0D0630",
                  fontWeight: "bold",
                }}
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                I'm Ibshar Akrami.
              </h1>
              <h1
                className="text-black text-right self-end mr-2 text-xl sm:text-2xl "
                style={{
                  textAlign: "end",
                  // fontFamily: "AsgardTrial",
                  color: backgroundColor === "#0D0630" ? "white" : "#0D0630",
                  fontWeight: "bold",
                }}
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                Software Engineer
              </h1>

              <h1
                className=" text-right self-end mr-4 text-xl sm:text-3xl mt-6 font-sans text-blue-400 tracking-wider"
                style={{ textAlign: "end", fontWeight: "bold" }}
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                LET'S DISCUSS
              </h1>
              <div class="flex mt-3 mx-2  justify-end">
                <a
                  href="https://www.instagram.com/ibshar_akrami/"
                  class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-6 h-6">
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                  </svg>
                </a>

                <a
                  href="https://twitter.com/IbsharAhmed"
                  class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-6 h-6">
                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                  </svg>
                </a>

                <a href="https://github.com/ibsharakrami" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                  <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
              <div className="w-6 h-6 bg-red-400 rounded-full"></div>
            </div>
            <div className=" justify-items-center sm:w-1/2 flex justify-center items-center ">
              {/* <ProgramSvg className="h-72 w-72  sm:h-96 w-96 " /> */}
              <Lottie animationData={Ainme} className="w-80  items-center justify-center  sm:mt-0 sm:w-96" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" />
            </div>
          </div>
          <h1
            className="text-5xl mt-0 md:text-9xl -mt-10"
            style={{
              textAlign: "center",
              // fontFamily: "AsgardTrial",
              color: backgroundColor === "#0D0630" ? "#0F0A3A" : "#D9DBE9",
              fontWeight: "bold",
            }}
          >
            Ibsharcodes
          </h1>
          <div className="md:flex flex-row items-center justify-around mt-4 mb-3">
            <div className="flex flex-row items-center justify-center mt-2" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine">
              <h1
                className="text-7xl ml-12 md:text-8xl   "
                style={{
                  textAlign: "center",
                  fontFamily: "AsgardTrial",
                  color: backgroundColor === "#0D0630" ? "white" : "#0D0630",
                  fontWeight: "bold",
                }}
              >
                +2{" "}
              </h1>
              <h1
                className="text-2xl w-40 ml-1 md:text-4xl w-72 "
                style={{
                  // textAlign: 'center',
                  // fontFamily: "AsgardTrial",
                  color: backgroundColor === "#0D0630" ? "white" : "#0D0630",
                  fontWeight: "bold",
                }}
              >
                YEARS OF EXPERIENCE
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center mt-2" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine">
              <h1
                className="text-7xl ml-12 md:text-8xl   "
                style={{
                  textAlign: "center",
                  fontFamily: "AsgardTrial",
                  color: backgroundColor === "#0D0630" ? "white" : "#0D0630",
                  fontWeight: "bold",
                }}
              >
                +5{" "}
              </h1>
              <h1
                className="text-2xl w-40 ml-1 md:text-4xl w-72 "
                style={{
                  // textAlign: 'center',
                  // fontFamily: "AsgardTrial",
                  color: backgroundColor === "#0D0630" ? "white" : "#0D0630",
                  fontWeight: "bold",
                }}
              >
                PROJECTS COMPLETED
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="about-section">
        <Sections backgroundColor={backgroundColor} />
      </div>

      <div id="services-section">
        <Experience backgroundColor={backgroundColor} />
      </div>

      <div id="contact-section">
        <Contacts backgroundColor={backgroundColor} />
      </div>
      <Footers backgroundColor={backgroundColor} />
    </div>
  );
};

export default Home;
