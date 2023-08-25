import React, { useEffect } from "react";
import "../App.css";
import Lottie from "lottie-react";
import Ainme from "../assets/images/animation_llce19ob.json"
import Aos from "aos";
import "aos/dist/aos.css";
const Experience = (props)=>{
  console.log("props===>",props)
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return(

<section className="dark:bg-gray-800 dark:text-gray-100" style={{ backgroundColor: props.backgroundColor ,paddingTop:75,paddingBottom:25}} >
<div class="md:flex   ml-10 mr-10 md:ml-36 md:mr-36">
        <div class="md:mr-20 md:w-1/3">

            <Lottie animationData={Ainme} className="w-80  items-center justify-center  sm:mt-0 sm:w-96" data-aos="fade-up"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine" />


        </div>


        <div class="md:w-2/3 ">
            <h1 class="font-bold mb-10"   style={{
              // textAlign: 'center',
              fontFamily: "AsgardTrial",
              color: props.backgroundColor === "#0D0630" ? "white" : "#000",
              fontWeight: "bold",
              fontSize:60,

            }}
            data-aos="fade-up"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine"
            >Experience</h1>

          	<ol class="relative border-l border-gray-200 dark:border-gray-700" >
		<li class="mb-10 ml-4">
			<div
				class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
			</div>
			<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" data-aos="fade-up-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">Aug 2021 - Jan 2022</time>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-white"  style={{

              // fontFamily: "AsgardTrial",
              color: props.backgroundColor === "#0D0630" ? "white" : "#000",
              fontWeight: "bold",

            }} data-aos="fade-up-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">Novaitech</h3>
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400" data-aos="fade-up-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">As a student intern focused on Flutter and React development, I'm eager to learn project design and implementation. I'm excited to contribute to user-friendly interfaces, collaborate with experienced developers, and enhance my coding skills. This internship offers hands-on experience to creatively improve project architecture and user experience, driving my growth as a developer and innovator.





</p>

		</li>
		<li class="mb-10 ml-4">
			<div
				class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
			</div>
			<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" data-aos="fade-up-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">Oct 2022 - Jan 2023</time>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-white" style={{

// fontFamily: "AsgardTrial",
color: props.backgroundColor === "#0D0630" ? "white" : "#000",
fontWeight: "bold",

}} data-aos="fade-up-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">M2H Infotech LLP</h3>
			<p class="text-base font-normal text-gray-500 dark:text-gray-400" data-aos="fade-up-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">As a React Native developer, I excel in designing and integrating APIs to create project functionalities. My expertise lies in crafting user-friendly interfaces while seamlessly merging design with robust back-end operations. I'm dedicated to optimizing performance and user interactions, translating innovative designs into functional, data-driven mobile applications.</p>
		</li>
		<li class="ml-4">
			<div
				class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
			</div>
			<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" data-aos="fade-up-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">Jan 2023 - Present</time>
			<h3 class="text-lg font-semibold text-gray-900 dark:text-white" style={{

// fontFamily: "AsgardTrial",
color: props.backgroundColor === "#0D0630" ? "white" : "#000",
fontWeight: "bold",

}} data-aos="fade-up-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">Wooshelf</h3>
			<p class="text-base font-normal text-gray-500 dark:text-gray-400" data-aos="fade-up-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">I specialize in React Native development, where I fuse design with API integration to bring project functionalities to life. I'm adept at harmonizing front-end aesthetics with back-end efficiency, ensuring smooth data flow through seamless API incorporation. My focus on user interaction optimization enables me to transform creative designs into fully operational mobile applications that offer a compelling and dynamic user experience.</p>
		</li>
	</ol>
        </div>
    </div>
</section>
  )
}

export default Experience;
