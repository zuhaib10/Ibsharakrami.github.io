import React, { useEffect } from "react";
import "../App.css";
import img from "../assets/images/ibshatr1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Sections = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  console.log("props===>", props);
  return (
    <section
      class="bg-white dark:bg-gray-900"
      style={{ backgroundColor: props.backgroundColor, paddingTop: 75 }}
    >
      <div class="container  px-6 py-10 mx-auto">
        <div class="lg:-mx-6 lg:flex lg:items-center ">
          <img
            class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src={img}
            alt=""
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          />

          <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0  ">
            <p
              class="text-5xl font-semibold text-blue-500 "
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              “
            </p>

            <h1
              class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96"
              style={{
                color: props.backgroundColor === "#0D0630" ? "white" : "#000",
              }}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              Boosting Efficiency Through Code
            </h1>

            <p
              class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 "
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              “To seek a dynamic and challenging position in any of my areas of
              expertise which could help to the organization achieve its goals
              in the best possible way with undiluted devotion, innovation,
              discipline and dedication. To attain a challenging and responsible
              position in an organization that can provide me excellent
              opportunities of career growth and learning while utilizing my
              technical and analytical skills for companys growth and
              development as well. ”
            </p>

            <h3
              class="mt-6 text-lg font-medium text-blue-500"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              Ibshar Ahmed Akrami
            </h3>
            <p
              class="text-gray-600 dark:text-gray-300"
              style={{
                color: props.backgroundColor === "#0D0630" ? "white" : "#000",
              }}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              Software Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
